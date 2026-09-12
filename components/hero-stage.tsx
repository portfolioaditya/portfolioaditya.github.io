"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { materials } from '@/lib/content';
gsap.registerPlugin(ScrollTrigger);
const introKey = 'aditya-rebuild-intro-v1';
export default function HeroStage() {
  const stage = useRef<HTMLDivElement>(null);
  const intro = useRef<gsap.core.Timeline | null>(null);
  const [opening, setOpening] = useState(false);
  useEffect(() => {
    const root = stage.current;
    const hero = root?.closest('.home-hero');
    if (!root || !hero) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-orbit]', root);
      const compact = window.matchMedia('(max-width: 760px)').matches;
      const positions = cards.map(el => ({ x: gsap.quickSetter(el, 'x', 'px'), y: gsap.quickSetter(el, 'y', 'px'), rotation: gsap.quickSetter(el, 'rotation', 'deg') }));
      const updateOrbit = (progress: number) => {
        const theta = progress * Math.PI * 1.15;
        const gain = compact ? .4 : 1;
        positions.forEach((setter, i) => {
          const phase = [0, -1.1, 1.3][i];
          setter.x((Math.sin(theta + phase) - Math.sin(phase)) * [30, 100, 85][i] * gain);
          setter.y((Math.cos(theta + phase) - Math.cos(phase)) * [26, 80, 75][i] * gain);
          setter.rotation([-3, -12, 12][i] + Math.sin(theta) * [4, -9, 9][i]);
        });
      };
      updateOrbit(0);
      const scroll = ScrollTrigger.create({ trigger: hero, start: 'top top', end: 'bottom top', onUpdate: self => updateOrbit(self.progress), invalidateOnRefresh: true });
      let seen = false;
      try { seen = sessionStorage.getItem(introKey) === 'seen'; sessionStorage.setItem(introKey, 'seen'); } catch { /* Storage is optional. */ }
      let deadline: ReturnType<typeof setTimeout> | undefined;
      if (!seen && window.scrollY < 80) {
        setOpening(true);
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: () => setOpening(false) });
        intro.current = timeline;
        timeline.from(root.querySelectorAll('.material-photo'), { clipPath: 'inset(100% 0 0 0 round 20px)', y: 28, scale: .92, duration: 1.1, stagger: .1 }, 0)
          .from(hero.querySelectorAll('.hero-copy .flip-word'), { yPercent: 32, opacity: 0, rotateX: -22, duration: .8, stagger: .08 }, .3)
          .from(hero.querySelectorAll('.hero-eyebrow, .hero-intro, .hero-actions'), { y: 12, opacity: 0, duration: .65, stagger: .07 }, .55);
        deadline = setTimeout(() => { timeline.progress(1); setOpening(false); }, 1500);
      }
      const visibility = () => { if (document.hidden && intro.current) { intro.current.progress(1); setOpening(false); } };
      document.addEventListener('visibilitychange', visibility);
      return () => { if (deadline) clearTimeout(deadline); scroll.kill(); intro.current?.revert(); intro.current = null; setOpening(false); document.removeEventListener('visibilitychange', visibility); gsap.set(cards, { clearProps: 'transform' }); };
    });
    return () => media.revert();
  }, []);
  function skip() { intro.current?.progress(1); setOpening(false); }
  return <><div className="hero-stage" ref={stage} aria-label="Flexible films, electrospun fibre mats and edible straws"><div className="hero-halo" aria-hidden="true" />{materials.map((m, i) => <div className={`material-orbit orbit-${m.id}`} data-orbit={m.id} key={m.id}><figure className="material-photo" data-cursor="material"><Image src={m.image} alt={m.alt} width={1536} height={1024} sizes={i === 0 ? '(max-width: 760px) 65vw, 55vw' : '(max-width: 760px) 35vw, 23vw'} preload={i === 0} loading={i === 0 ? undefined : 'eager'} /></figure></div>)}</div>{opening && <button className="intro-skip" onClick={skip}>Skip intro <span aria-hidden="true" /></button>}</>;
}

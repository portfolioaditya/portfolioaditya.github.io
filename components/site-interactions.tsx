"use client";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function SiteInteractions() {
  const path = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 761px)' }, (context) => {
      if (!context.conditions?.motion) return;
      const root = document.querySelector('main');
      if (!root) return;
      const ctx = gsap.context(() => {
        gsap.to(progress.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
        gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach(el => {
          gsap.from(el, { y: 34, opacity: .2, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 94%', once: true } });
        });
        gsap.utils.toArray<HTMLElement>('.section-heading h2, .about-group-label h2', root).forEach(el => {
          gsap.from(el, { y: 22, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 95%', once: true } });
        });
        const statement = root.querySelector('.statement');
        if (statement) gsap.from(statement, { x: -25, opacity: .3, scrollTrigger: { trigger: statement, start: 'top 90%', end: 'top 45%', scrub: 1 } });
        if (context.conditions?.desktop) {
          const images = gsap.utils.toArray<HTMLElement>('[data-story-image]', root);
          const steps = gsap.utils.toArray<HTMLElement>('[data-story-step]', root);
          images.forEach((image, i) => gsap.set(image, { autoAlpha: i === 0 ? 1 : 0, rotation: i === 0 ? -3 : 6, xPercent: i === 0 ? 0 : 12, yPercent: i === 0 ? 0 : 8 }));
          const choose = (index: number) => images.forEach((image, i) => gsap.to(image, { autoAlpha: i === index ? 1 : 0, rotation: i === index ? -3 : i < index ? -10 : 6, xPercent: i === index ? 0 : i < index ? -12 : 12, yPercent: i === index ? 0 : i < index ? -8 : 8, duration: .7, ease: 'power2.out', overwrite: true }));
          steps.forEach((step, i) => ScrollTrigger.create({ trigger: step, start: 'top 65%', end: 'bottom 65%', onEnter: () => choose(i), onEnterBack: () => choose(i) }));
        }
      }, root);
      let active = true;
      const refresh = () => { if (active) ScrollTrigger.refresh(); };
      const images = Array.from(root.querySelectorAll('img'));
      images.forEach(image => image.addEventListener('load', refresh));
      document.fonts.ready.then(refresh);
      refresh();
      return () => { active = false; images.forEach(image => image.removeEventListener('load', refresh)); gsap.killTweensOf(root.querySelectorAll('[data-story-image]')); ctx.revert(); };
    });
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const cleanups: (() => void)[] = [];
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(el => {
        const x = gsap.quickTo(el, 'x', { duration: .35, ease: 'power2.out' });
        const y = gsap.quickTo(el, 'y', { duration: .35, ease: 'power2.out' });
        const move = (e: PointerEvent) => { const rect = el.getBoundingClientRect(); x((e.clientX - rect.left - rect.width / 2) * .12); y((e.clientY - rect.top - rect.height / 2) * .18); };
        const leave = () => { x(0); y(0); };
        el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
        cleanups.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); x.tween.kill(); y.tween.kill(); gsap.set(el, { clearProps: 'transform' }); });
      });
      document.querySelectorAll<HTMLElement>('.material-photo').forEach(el => {
        const x = gsap.quickTo(el, 'rotationY', { duration: .5 });
        const y = gsap.quickTo(el, 'rotationX', { duration: .5 });
        const move = (e: PointerEvent) => { const r = el.getBoundingClientRect(); x((e.clientX - r.left) / r.width * 8 - 4); y(-((e.clientY - r.top) / r.height * 8 - 4)); };
        const leave = () => { x(0); y(0); };
        el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
        cleanups.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); x.tween.kill(); y.tween.kill(); gsap.set(el, { clearProps: 'transform' }); });
      });
      return () => cleanups.forEach(fn => fn());
    });
    return () => media.revert();
  }, [path]);
  return <div className="reading-progress" aria-hidden="true" ref={progress} />;
}

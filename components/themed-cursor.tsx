"use client";
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import { gsap } from 'gsap';
export default function ThemedCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = gsap.matchMedia();
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const x = gsap.quickTo(el, 'x', { duration: .22, ease: 'power3.out' });
      const y = gsap.quickTo(el, 'y', { duration: .22, ease: 'power3.out' });
      const move = (event: PointerEvent) => {
        x(event.clientX); y(event.clientY);
        el.classList.add('cursor-visible');
        const target = event.target instanceof Element ? event.target : null;
        el.dataset.kind = target?.closest('a,button,summary') ? 'link' : target?.closest('[data-cursor="material"]') ? 'material' : 'normal';
      };
      const hide = () => el.classList.remove('cursor-visible');
      const down = () => el.classList.add('cursor-pressed');
      const up = () => el.classList.remove('cursor-pressed');
      const visible = () => { if (document.hidden) hide(); };
      window.addEventListener('pointermove', move); document.addEventListener('pointerleave', hide); window.addEventListener('blur', hide);
      window.addEventListener('pointerdown', down); window.addEventListener('pointerup', up); document.addEventListener('visibilitychange', visible);
      return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', hide); window.removeEventListener('blur', hide); window.removeEventListener('pointerdown', down); window.removeEventListener('pointerup', up); document.removeEventListener('visibilitychange', visible); x.tween.kill(); y.tween.kill(); hide(); };
    });
    return () => media.revert();
  }, []);
  return <div className="themed-cursor" ref={ref} aria-hidden="true"><div className="cursor-ring"><ArrowUpRight className="cursor-arrow" size={22} /><Asterisk className="cursor-material" size={30} /></div></div>;
}

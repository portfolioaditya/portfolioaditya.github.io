"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import SpotlightNav from './ui/spotlight-nav';
export const primary = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Publications', '/publications'], ['Contact', '/contact']];
export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    function key(e: KeyboardEvent) { if (e.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }
    function outside(e: PointerEvent) { if (!nav.current?.contains(e.target as Node)) setOpen(false); }
    document.addEventListener('keydown', key); document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header className="site-header"><nav ref={nav} className="nav-shell" aria-label="Main navigation">
    <Link href="/" className="brand" aria-label="Aditya Gupta home"><span className="brand-mark">ag<span>✳</span></span><span className="brand-name">Aditya Gupta</span></Link>
    <div className="desktop-nav"><SpotlightNav items={primary} /></div>
    <a className="nav-cv" href="/aditya-gupta-resume.docx" download data-magnetic>Download CV <ArrowUpRight size={16} /></a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <div className="mobile-nav" id="mobile-navigation">{primary.map(([label, href], i) => <Link key={href} href={href} aria-current={path.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined}><span className="mono">0{i + 1}</span>{label}<ArrowUpRight size={22} /></Link>)}</div>}
  </nav></header>;
}

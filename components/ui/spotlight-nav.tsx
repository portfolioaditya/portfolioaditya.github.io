"use client";
// Adapted from Vengeance UI SpotlightNavbar (MIT). See THIRD_PARTY_NOTICES.md.
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef} from 'react';
import {animate} from 'motion';
export default function SpotlightNav({items}:{items:string[][]}){
 const ref=useRef<HTMLDivElement>(null);const path=usePathname();
 useEffect(()=>{const root=ref.current;const active=root?.querySelector<HTMLElement>('[aria-current="page"]');if(!root||!active)return;const x=active.offsetLeft+active.offsetWidth/2;const animation=animate(root,{'--ambience-x':`${x}px`},{duration:.35});return()=>animation.stop()},[path]);
 return <div className="spotlight-nav" ref={ref} onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--spotlight-x',`${e.clientX-r.left}px`)}} onPointerLeave={e=>e.currentTarget.style.setProperty('--spotlight-x','var(--ambience-x)')}>{items.map(([label,href])=>{const active=path.replace(/\/$/,'')===href.replace(/\/$/,'');return <Link key={href} href={href} aria-current={active?'page':undefined}>{label}</Link>})}</div>
}

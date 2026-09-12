import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/content';
export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><span className="eyebrow">RESEARCH STARTS WITH A CONVERSATION</span><Link href="/contact" className="footer-invitation">Let’s connect.<span className="circle-arrow"><ArrowUpRight /></span></Link></div><div className="footer-bottom"><Link href="/" className="footer-name">Aditya Gupta <span>© 2026</span></Link><div>{profile.socials.filter(s => ['Email', 'LinkedIn', 'ORCID'].includes(s.title)).map(s => <a key={s.title} href={s.href} target={s.title === 'Email' ? undefined : '_blank'} rel="noreferrer">{s.title}<ArrowUpRight size={13} /></a>)}</div><span className="footer-note">Materials imagery is illustrative.</span></div></footer>;
}

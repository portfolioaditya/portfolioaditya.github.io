import { ArrowUpRight } from 'lucide-react';
import type { PortfolioEntry } from '@/lib/content';
export default function ResumeEntry({ item }: { item: PortfolioEntry }) {
  return <article className="resume-entry" data-reveal>
    <div className="resume-entry-top"><h3>{item.title}</h3>{item.date && <span className="entry-date">{item.date}</span>}</div>
    {item.subtitle && <p className="entry-subtitle">{item.subtitle}</p>}
    {item.grade && <p className="grade">{item.grade}</p>}
    {item.text && <p className="entry-description">{item.text}</p>}
    {item.bullets && <ul className="entry-list">{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
    {item.tags && <div className="tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>}
    {item.href && <a className="text-link" href={item.href} target="_blank" rel="noreferrer">Read more <ArrowUpRight size={17} /></a>}
  </article>;
}

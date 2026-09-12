import { ArrowUpRight } from 'lucide-react';
import { sections } from '@/lib/content';
export default function PublicationList() {
  return <div className="publications-list">{sections.publications.entries.map((paper, i) => <article className="publication" key={paper.title} data-reveal>
    <div className="publication-index"><span className="mono">0{i + 1}</span><span>{paper.date}</span></div>
    <div className="publication-body"><div className="publication-journal"><span>{paper.subtitle}</span><span className={`status ${paper.status?.toLowerCase()}`}>{paper.status}</span></div><h2>{paper.title}</h2><p className="publication-authors">{paper.authors}</p>{paper.href && <a href={paper.href} className="doi-link" target="_blank" rel="noreferrer"><span>DOI</span>{paper.href.replace('https://doi.org/', '')}<ArrowUpRight size={16} /></a>}</div>
    {paper.href && <a className="paper-open circle-arrow" href={paper.href} target="_blank" rel="noreferrer" aria-label={`Read ${paper.title}`}><ArrowUpRight /></a>}
  </article>)}</div>;
}

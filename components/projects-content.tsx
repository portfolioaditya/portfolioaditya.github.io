import { sections } from '@/lib/content';
export default function ProjectsContent() {
  return <div className="project-chapters">{sections.projects.entries.map((project, i) => <article className={`project-chapter chapter-${i}`} id={`project-${i + 1}`} key={project.title} data-reveal>
    <div className="project-chapter-heading"><span className="chapter-number">0{i + 1}</span><span className="eyebrow">{['SMART PACKAGING', 'FLEXIBLE MATERIALS', 'TEXTILE DESIGN'][i]}</span><h2>{project.title}</h2><div className="tags">{project.tags?.map(t => <span key={t}>{t}</span>)}</div></div>
    <div className="project-details"><div className="project-context"><span className="entry-date">{project.date}</span><p>{project.subtitle}</p></div><p className="project-summary">{project.text}</p><ul className="entry-list">{project.bullets?.map(b => <li key={b}>{b}</li>)}</ul></div>
  </article>)}</div>;
}

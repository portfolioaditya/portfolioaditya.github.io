import { ArrowDown } from 'lucide-react';
import { sections, profile, pageLabels } from '@/lib/content';
import ResumeEntry from './resume-entry';
const groups = ['experience', 'education', 'skills', 'internships', 'leadership', 'achievements', 'references'];
export default function AboutContent() {
  return <div className="about-content">
    <section className="about-introduction"><div><p className="about-lead">{profile.summary}</p><p>{profile.approach}</p><a href={profile.cv} download className="text-link">Download my CV <ArrowDown size={18} /></a></div><aside className="interests-panel"><span className="eyebrow">RESEARCH INTERESTS</span><ul>{profile.interests.map(t => <li key={t}>{t}</li>)}</ul></aside></section>
    {groups.map((key, i) => <section className={`about-group group-${key}`} key={key} aria-labelledby={`heading-${key}`}><div className="about-group-label"><span className="mono">0{i + 1}</span><h2 id={`heading-${key}`}>{pageLabels[key]}</h2></div><div className="about-group-entries">{sections[key].entries.map(item => <ResumeEntry key={item.title} item={item} />)}</div></section>)}
  </div>;
}

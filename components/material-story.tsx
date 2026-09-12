import Image from 'next/image';
import { materials } from '@/lib/content';
export default function MaterialStory() {
  return <section className="material-story" aria-label="Materials research"><div className="story-visual" aria-hidden="true"><div className="story-stack" data-cursor="material">{materials.map((m, i) => <figure key={m.id} className={`story-photo story-photo-${i}`} data-story-image={i}><Image src={m.image} alt="" width={1536} height={1024} sizes="50vw" /></figure>)}</div></div><div className="story-text">{materials.map((m, i) => <article className="material-step" key={m.id} data-story-step={i}><figure className="mobile-material"><Image src={m.image} alt={m.alt} width={1536} height={1024} sizes="90vw" /></figure><span className="eyebrow">{m.label}</span><h2>{m.title}</h2><p>{m.description}</p><span className="material-step-index mono">0{i + 1} / 03</span></article>)}</div></section>;
}

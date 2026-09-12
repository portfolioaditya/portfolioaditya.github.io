import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import MaterialStory from '@/components/material-story';
import HeroStage from '@/components/hero-stage';
import AnimatedLink from '@/components/ui/animated-link';
import FlipText from '@/components/ui/flip-text';
import { profile, sections } from '@/lib/content';
import MediaGallery from '@/components/media-gallery';
export default function Home() {
  return <main id="main">
    <section className="home-hero">
      <HeroStage />
      <div className="hero-copy"><p className="eyebrow hero-eyebrow">POLYMER MATERIALS RESEARCHER</p><h1><FlipText>Aditya Gupta.</FlipText></h1><p className="hero-intro">Exploring materials for sustainable<br className="desktop-break" /> and smart packaging.</p><div className="hero-actions"><Link href="/projects" className="button button-primary" data-magnetic>Explore my research <ArrowUpRight size={19} /></Link><a href={profile.cv} download className="button button-quiet" data-magnetic>Download CV <ArrowDown size={17} /></a></div></div>
      <a href="#research" className="scroll-cue" aria-label="Scroll to research"><ArrowDown size={17} /><span>SCROLL TO EXPLORE</span></a>
    </section>
    <section id="research" className="research-intro section-pad"><div className="section-kicker"><span className="eyebrow">A CLOSER LOOK</span><span className="mono">01 / RESEARCH</span></div><h2 className="statement" data-word-reveal>Sustainable materials.<br /><span>Smarter packaging.</span></h2><div className="intro-bottom"><p>I work with biodegradable polymers, electrospun fibres and functional materials to rethink how packaging protects.</p><AnimatedLink href="/about" className="text-link">About my work <ArrowUpRight size={20} /></AnimatedLink></div></section>
    <MaterialStory />
    <section className="home-projects section-pad"><div className="section-heading"><div><span className="eyebrow">SELECTED WORK</span><h2>Ideas, in practice.</h2></div><AnimatedLink href="/projects" className="text-link">All projects <ArrowUpRight size={20} /></AnimatedLink></div><div className="project-preview-list">{sections.projects.entries.map((project, i) => <Link href={`/projects#project-${i + 1}`} className="project-preview" key={project.title} data-reveal><span className="project-number mono">0{i + 1}</span><div><span className="eyebrow">{['SMART PACKAGING', 'FLEXIBLE MATERIALS', 'TEXTILE DESIGN'][i]}</span><h3>{['Sensing oxygen. Wirelessly.', 'Building films, layer by layer.', 'Finding geometry in textiles.'][i]}</h3><p>{project.title}</p></div><span className="circle-arrow"><ArrowUpRight /></span></Link>)}</div></section>
    <section className="home-writing section-pad"><div className="section-heading"><div><span className="eyebrow">FROM THE RESEARCH</span><h2>Selected writing.</h2></div><AnimatedLink href="/publications" className="text-link">All publications <ArrowUpRight size={20} /></AnimatedLink></div><div className="writing-preview">{sections.publications.entries.slice(0, 2).map(p => <article key={p.title} data-reveal><div className="paper-meta"><span className="mono">{p.date}</span><span className={`status ${p.status?.toLowerCase()}`}>{p.status}</span></div><h3>{p.title}</h3><p>{p.subtitle}</p>{p.href ? <a className="text-link" href={p.href} target="_blank" rel="noreferrer">Read paper <ArrowUpRight size={18} /></a> : <Link className="text-link" href="/publications">Publication details <ArrowUpRight size={18} /></Link>}</article>)}</div></section>
    <MediaGallery />
  </main>;
}

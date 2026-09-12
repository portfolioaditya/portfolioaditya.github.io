import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageLabels, routeDescriptions } from '@/lib/content';
import AboutContent from '@/components/about-content';
import ProjectsContent from '@/components/projects-content';
import PublicationList from '@/components/publication-list';
import ContactContent from '@/components/contact-content';
const routes = ['about', 'projects', 'publications', 'contact'];
export const dynamicParams = false;
export function generateStaticParams() { return routes.map(section => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  return { title: pageLabels[section], description: routeDescriptions[section] };
}
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!routes.includes(section)) notFound();
  const heading: Record<string, string> = { about: 'About Aditya.', projects: 'Projects.', publications: 'Publications.', contact: 'Let’s talk.' };
  const sub: Record<string, string> = { about: 'Polymer materials. Practical curiosity.', projects: 'From responsive sensing to flexible structures.', publications: 'Research, shared.', contact: 'A conversation can be the start of something useful.' };
  return <main id="main" className={`inner-page page-${section}`}><header className="page-heading"><div className="page-heading-top"><span className="eyebrow">ADITYA GUPTA / {pageLabels[section].toUpperCase()}</span><span className="mono">0{routes.indexOf(section) + 2}</span></div><h1>{heading[section]}</h1><p>{sub[section]}</p></header><div className="page-body">{section === 'about' ? <AboutContent /> : section === 'projects' ? <ProjectsContent /> : section === 'publications' ? <PublicationList /> : <ContactContent />}</div></main>;
}

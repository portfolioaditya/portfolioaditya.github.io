import type { Metadata } from 'next';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import './globals.css';
import SiteInteractions from '@/components/site-interactions';
import ThemedCursor from '@/components/themed-cursor';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
export const metadata: Metadata = {
  title: { default: 'Aditya Gupta — Polymer Materials Researcher', template: '%s | Aditya Gupta' },
  description: 'Research in flexible biopolymer films, electrospun nanofibres and sustainable, smart packaging. Projects, publications and academic experience of Aditya Gupta.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation /><SiteInteractions /><ThemedCursor />{children}<Footer /></body></html>;
}

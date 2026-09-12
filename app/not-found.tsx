import Link from 'next/link';
export default function NotFound() { return <main id="main" className="not-found"><span className="eyebrow">404</span><h1>Page not found.</h1><p>This page may have moved.</p><Link className="button button-primary" href="/">Back to home</Link></main>; }

import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
      </Head>
      <p>This page has no widget.</p>
      <Link href="/next-script">Link to page with a next/script included widget</Link>
    </div>
  );
}

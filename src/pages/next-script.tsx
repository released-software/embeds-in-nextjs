import CompetingHeadModifier from '@/components/CompetingHeadModifier';
import ReleasedWidget from '@/components/ReleasedWidget';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://example.com" />
      </Head>
      <CompetingHeadModifier />
      <ReleasedWidget />
      <CompetingHeadModifier />
      <p>See the widget in the bottom right.</p>
      <Link href="/otherthing">Go to a page with no widget</Link>
    </div>
  );
}

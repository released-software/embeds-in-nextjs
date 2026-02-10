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
      <ReleasedWidget preconnect={false} />
      <CompetingHeadModifier />
      <p>See the widget in the bottom right.</p>
      <p>Note: The disabling of preconnect is not yet enabled in production environments.</p>

      <ul>
      <li><Link href="/next-script">Link to page with a next/script included widget</Link></li>
      <li><Link href="/otherthing">Go to a page with no widget</Link></li>
      </ul>
    </div>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function About() {
  return (
    <div>
      <Head>
        {/* <script src="https://adam-embeds.released.site/1/embed.js" defer></script> */}
        <link rel="preconnect" href="https://example.com" />
      </Head>
      <Script  src="https://adam-embeds.released.site/1/embed.js" defer />
      <released-widget channel-id="23945d30-5e68-4271-8ef2-477ab302a67d"></released-widget>
      <p>See the widget in the bottom right.</p>
      <Link href="/otherthing">Go to a page with no widget</Link>
    </div>
  );
}

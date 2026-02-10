import Head from "next/head";
import { useId } from "react";


export default function CompetingHeadModifier() {
  const id = useId();
  return (

      <Head>
        <link rel="preconnect" href={"https://example.com/" + id} />
        <meta name={"custom" + id} content="This is a test" />
      </Head>
  );
}
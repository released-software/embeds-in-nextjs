import Script from "next/script";


export default function ReleasedWidget({preconnect}: {preconnect?: boolean}) {
    return (
      <>
        <Script src={process.env.NEXT_PUBLIC_RELEASED_EMBED_URL} defer data-preconnect={String(preconnect ?? true)} />
        <released-widget channel-id={process.env.NEXT_PUBLIC_RELEASED_CHANNEL_ID}></released-widget>
      </>
    );
}
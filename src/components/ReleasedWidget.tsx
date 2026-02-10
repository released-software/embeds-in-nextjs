import Script from "next/script";


export default function ReleasedWidget() {
    return (
        <>
        
      <Script src={process.env.NEXT_PUBLIC_RELEASED_EMBED_URL} defer />
      <released-widget channel-id={process.env.NEXT_PUBLIC_RELEASED_CHANNEL_ID}></released-widget>
      </>
    );
}
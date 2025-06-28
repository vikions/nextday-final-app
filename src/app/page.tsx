import { Metadata } from "next";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NEXTDAY: BTC Price Prediction",
    // Мы передаем все fc:frame теги через объект openGraph,
    // чтобы Next.js сгенерировал их с атрибутом 'property'
    openGraph: {
      title: "NEXTDAY: BTC Price Prediction",
      images: [`${appUrl}/image.png`],
      other: {
        "fc:frame": "vNext",
        "fc:frame:image": `${appUrl}/image.png`,
        "fc:frame:post_url": `${appUrl}/api/vote`,
        "fc:frame:button:1": "Higher ⬆️",
        "fc:frame:button:2": "Lower ⬇️",
      },
    },
  };
}

export default function Home() {
  return (
    <div>
      <h1>NEXTDAY - BTC Price Prediction Game</h1>
      <p>This app is a Farcaster Frame.</p>
    </div>
  );
}
import type { Metadata } from 'next';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = {
    "fc:frame": "vNext",
    "fc:frame:image": `${appUrl}/image.png`,
    "fc:frame:post_url": `${appUrl}/api/vote`,
    "fc:frame:button:1": "Higher ⬆️",
    "fc:frame:button:2": "Lower ⬇️",
  };

  return {
    title: "NEXTDAY: BTC Price Prediction",
    openGraph: {
      title: "NEXTDAY: BTC Price Prediction",
      images: [`${appUrl}/image.png`],
    },
    other: frameMetadata,
  };
}

// Теперь эта часть просто возвращает заголовок.
// Для Farcaster-клиента это не имеет значения, он смотрит только на мета-теги.
export default function Home() {
  return (
    <div>
      <h1>NEXTDAY - BTC Price Prediction Game</h1>
    </div>
  );
}
import { Metadata } from "next";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NEXTDAY: BTC Price Prediction",
    openGraph: {
      title: "NEXTDAY: BTC Price Prediction",
      images: [`${appUrl}/image.png`],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": `${appUrl}/image.png`,
      // Кнопка теперь ведет на новый адрес /api/show-price
      "fc:frame:post_url": `${appUrl}/api/show-price`, 
      "fc:frame:button:1": "▶️ Start Prediction",
    },
  };
}

export default function Home() {
  return (
    <div>
      <h1>NEXTDAY - BTC Price Prediction Game</h1>
    </div>
  );
}
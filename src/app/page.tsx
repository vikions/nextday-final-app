import { Metadata } from "next";
import App from "./app";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = {
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
    other: {
      // Это правильный способ для Next.js сгенерировать 'property' теги.
      // Мы передаем объект с нашими тегами в 'other'.
      ...frameTags,
    },
  };
}

export default function Home() {
  return <App />;
}
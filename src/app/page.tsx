import { Metadata } from "next";
import App from "./app";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function generateMetadata(): Promise<Metadata> {
  // Теперь здесь только Open Graph теги для красивых превью
  // и ОДИН специальный fc:frame:frame_url
  return {
    title: "NEXTDAY: BTC Price Prediction",
    openGraph: {
      title: "NEXTDAY: BTC Price Prediction",
      images: [`${appUrl}/image.png`],
    },
    other: {
      // Этот тег говорит клиенту Farcaster: "иди за фреймом сюда"
      "fc:frame": "vNext",
      "fc:frame:image": `${appUrl}/image.png`, // Fallback-изображение
      "fc:frame:post_url": `${appUrl}/api/frame`, // Адрес, куда Farcaster пойдет за кодом фрейма
    },
  };
}

export default function Home() {
  return <App />;
}
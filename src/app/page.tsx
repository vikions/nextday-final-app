import { Metadata } from "next";

// URL вашего приложения. Убедитесь, что эта переменная установлена в настройках Vercel.
// Обратите внимание, что Next.js использует 'NEXT_PUBLIC_APP_URL', а не 'BASE_URL'.
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = {
    "fc:frame": "vNext",
    "fc:frame:image": `${appUrl}/image.png`, // Картинка для первого экрана
    "fc:frame:post_url": `${appUrl}/api/vote`, // Адрес, куда отправляется нажатие кнопки
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

export default function Home() {
  return (
    <div>
      <h1>NEXTDAY - BTC Price Prediction Game</h1>
    </div>
  );
}
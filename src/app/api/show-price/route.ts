import { NextRequest, NextResponse } from 'next/server';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

// Функция для получения цены BTC
async function getBTCPrice() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    if (!res.ok) {
      console.error("Failed to fetch price, status:", res.status);
      return '...';
    }
    const data = await res.json();
    return data?.bitcoin?.usd ?? '...';
  } catch (err) {
    console.error('Error fetching BTC price:', err);
    return '...';
  }
}

// Обработчик для /api/show-price
export async function POST(req: NextRequest): Promise<Response> {
  // Получаем цену BTC
  const btcPrice = await getBTCPrice();

  // Создаем картинку с ценой "на лету" с помощью SVG
  const svgImage = `
    <svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" style="fill:rgb(25,25,25);" />
      <text x="50%" y="40%" font-family="monospace" font-size="60px" fill="white" text-anchor="middle" dominant-baseline="middle">Current BTC Price:</text>
      <text x="50%" y="60%" font-family="monospace" font-size="140px" fill="white" text-anchor="middle" dominant-baseline="middle">$${btcPrice}</text>
    </svg>
  `;
  const dataUri = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;
  
  // Возвращаем HTML для второго фрейма
  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Predict the Price</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${dataUri}" />
        <meta property="fc:frame:button:1" content="Higher ⬆️" />
        <meta property="fc:frame:button:2" content="Lower ⬇️" />
        <meta property="fc:frame:button:3" content="Same ➖" />
        <meta property="fc:frame:post_url" content="${APP_URL}/api/vote" />
      </head>
    </html>
  `);
}
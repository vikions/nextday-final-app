import { NextRequest, NextResponse } from 'next/server';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

// Экран "Спасибо за голос"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_req: NextRequest): Promise<Response> {
  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Thanks for voting!</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${APP_URL}/splash.png" />
        <meta property="fc:frame:button:1" content="Share" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://warpcast.com/~/compose?text=I%20just%20predicted%20the%20BTC%20price%20on%20NEXTDAY!&embeds[]=${APP_URL}" />
      </head>
    </html>
  `);
}
import { NextRequest, NextResponse } from 'next/server';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

// Этот обработчик отдает HTML с нашим интерактивным фреймом
export async function POST(req: NextRequest): Promise<Response> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${APP_URL}/image.png" />
        <meta property="fc:frame:button:1" content="Higher ⬆️" />
        <meta property="fc:frame:button:2" content="Lower ⬇️" />
        <meta property="fc:frame:post_url" content="${APP_URL}/api/vote" />
      </head>
    </html>
  `;
  return new NextResponse(html);
}
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getGeoInfo(ip: string) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
    const data = await response.json();

    if (data.status === 'success') {
      return {
        country: data.country || '未知',
        region: data.regionName || data.city || '未知'
      };
    }
  } catch (error) {
    console.error('获取地理信息失败:', error);
  }

  return { country: '未知', region: '未知' };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const cfIp = request.headers.get('cf-connecting-ip');
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');

    const ip = cfIp
      || (forwardedFor ? forwardedFor.split(',')[0].trim() : null)
      || realIp
      || 'unknown';

    let queryIp = ip;
    if (
      process.env.NODE_ENV === 'development' ||
      ip === '::1' ||
      ip === '127.0.0.1' ||
      ip === 'unknown'
    ) {
      queryIp = '118.140.0.1';
    }

    const geoInfo = await getGeoInfo(queryIp);

    const { error } = await supabase
      .from('messages')
      .insert({
        name: body.name,
        content: body.content,
        ip_address: ip,
        country: geoInfo.country,
        region: geoInfo.region
      });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Messages API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

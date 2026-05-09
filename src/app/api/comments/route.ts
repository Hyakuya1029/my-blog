import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 获取IP地理信息
async function getGeoInfo(ip: string) {
  try {
    // 使用免费的IP地理定位API （?lang=zh-CN 语言参数设置为中文）
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

    // cf-connecting-ip获取Cloudflare 代理下访问者的真实公网 IP，放第一顺位
    const cfIp = request.headers.get('cf-connecting-ip');
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');

    const ip = cfIp 
      || (forwardedFor ? forwardedFor.split(',')[0].trim() : null)
      || realIp
      || 'unknown';

    //进行本地开发测试时，使用测试IP
    let queryIp = ip;
    if (
      process.env.NODE_ENV === 'development' ||
      ip === '::1' ||
      ip === '127.0.0.1' ||
      ip === 'unknown'  
    ) {
      queryIp = '118.140.0.1'; // 香港测试IP
    }
    let geoInfo = await getGeoInfo(queryIp);

    // 插入评论数据（包含IP和地理信息）
    const { error } = await supabase
      .from('comments')
      .insert({
        post_id: body.post_id,
        name: body.name,
        email: body.email,
        content: body.content,
        parent_id: body.parent_id || null,
        ip_address: ip,
        country: geoInfo.country,
        region: geoInfo.region
      });

    if (error) throw error;
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
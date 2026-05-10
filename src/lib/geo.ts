export async function getGeoInfo(ip: string) {
  try {
    const response = await fetch(`https://ip-api.com/json/${ip}?lang=zh-CN`);
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

export function getClientIP(request: Request): string {
  const cfIp = request.headers.get('cf-connecting-ip');
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  return cfIp
    || (forwardedFor ? forwardedFor.split(',')[0].trim() : null)
    || realIp
    || 'unknown';
}

export function getQueryIP(ip: string, env: string): string {
  if (env === 'development' || ip === '::1' || ip === '127.0.0.1' || ip === 'unknown') {
    return '118.140.0.1';
  }
  return ip;
}

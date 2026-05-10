export function getLocationText(country: string, region: string): string {
  if (!region || region === '未知') return '未知';
  if (country === 'Taiwan' || country === '台湾') return '台湾';
  if (country === 'Macau' || country === '澳门') return '澳门';
  if (country === 'Hong Kong' || country === '香港') return '香港';
  return region;
}

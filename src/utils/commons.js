// 大数字分割
export function formatNumberRgx(num) {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
  return parts.join('.');
}

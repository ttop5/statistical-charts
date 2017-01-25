// GET方法请求头
export function httpGetRequest() {
  return {
    method: 'GET',
    Origin: '*',
    icredentials: 'include',
    'Access-Control-Allow-Origin': '*',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    }),
  };
}

// 接口地址
export function getUrl(api) {
  const portUrl = 'http://127.0.0.1:8000/';
  return portUrl + api;
}

// 大数字分割
export function formatNumberRgx(num) {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
  return parts.join('.');
}

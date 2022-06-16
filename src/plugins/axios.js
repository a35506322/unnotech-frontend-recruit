import axios from 'axios';
// 域名
axios.defaults.baseURL = 'https://fe-interview-api.unnotech.com/';
// Error Handle
const errorHandle = (status, msg) => {
  switch (status) {
    case 400:
      console.log('400', msg);
      break;
    case 401:
      console.log('401', msg);
      break;
    case 404:
      console.log('404', msg);
      break;
    default:
      break;
  }
};

axios.interceptors.request.use((request) => request);
// doing something with the response
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      // 成功發出請求且收到 response, 但有 error
      errorHandle(response.status, response.data.error);
    }
    return Promise.reject(error);
  },
);
export default axios;

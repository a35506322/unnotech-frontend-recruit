import axios from 'axios';
import { app } from '@/main';

// 域名
axios.defaults.baseURL = 'https://fe-interview-api.unnotech.com/';

// Error Handle
const errorHandle = ((status) => {
  switch (status) {
    case 404:
      app.config.globalProperties.$toast.add({
        severity: 'error', summary: '程式內部失敗', detail: 'Api網址有誤', life: 3000,
      });
      break;
    default:
      break;
  }
});

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

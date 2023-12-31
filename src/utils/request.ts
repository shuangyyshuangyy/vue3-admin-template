import { useUserStore } from '@/store/modules/use-user-store';
import axios from 'axios';
import { ElMessage } from 'element-plus';

//request与axios都是axios实例，只是request多了一些配置
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  //携带token
  const userStore = useUserStore();
  if (userStore.token) config.headers.token = userStore.token;
  return config;
});

request.interceptors.response.use(
  (response) => {
    // console.log('response', response, 'response.data', response.data);
    return response.data;
  },
  (error) => {
    // console.log(error);
    let message = '';
    let status = error.response.status;
    switch (status) {
      case 401:
        message = 'token过期';
        break;
      case 403:
        message = '无权访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器出现问题';
        break;
      default:
        message = '无网络';
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);

export default request;

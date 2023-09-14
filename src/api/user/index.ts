//统一管理用户相关的接口
import request from '@/utils/request';
import type {
  loginData,
  loginResponse,
  logoutResponse,
  userInfoResponse,
} from './type';

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

//登录
export const reqLogin = (data: loginData) =>
  request.post<any, loginResponse, loginData>(API.LOGIN_URL, data);

//请求用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoResponse>(API.USERINFO_URL);

//退出登录
export const reqLogout = () =>
  request.post<any, logoutResponse, any>(API.LOGOUT_URL);

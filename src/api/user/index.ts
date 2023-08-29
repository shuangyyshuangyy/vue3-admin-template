//统一管理用户相关的接口
import request from '@/utils/request';
import type { loginData, loginResponse, userInfoResponse } from './type';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: loginData) =>
  request.post<any, loginResponse, loginData>(API.LOGIN_URL, data);

export const reqUserInfo = () =>
  request.get<any, userInfoResponse>(API.USERINFO_URL);

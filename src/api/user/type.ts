//登录接口需要携带的参数类型
export interface loginData {
  username: string;
  password: string;
}

interface loginResponseData {
  token?: string;
  message?: string;
}
//登录接口返回的数据类型
export interface loginResponse {
  code: number;
  data: loginResponseData;
}

interface checkUserType {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

interface userInfoResponsedata {
  checkUser?: checkUserType;
  message?: string;
}
//用户信息返回的数据类型
export interface userInfoResponse {
  code: number;
  data: userInfoResponsedata;
}

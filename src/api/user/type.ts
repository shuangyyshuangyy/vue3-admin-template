//登录接口需要携带的参数类型
export interface loginData {
  username: string;
  password: string;
}

interface baseResponseData {
  code: number;
  message: string;
  ok: boolean;
}
//登录接口返回的数据类型
export interface loginResponse extends baseResponseData {
  data: string;
}

//用户信息返回的数据类型
export interface userInfoResponse extends baseResponseData {
  data: {
    routes: string[];
    buttons: string[];
    roles: string[];
    name: string;
    avatar: string;
  };
}

//登录接口返回的数据类型
export interface logoutResponse extends baseResponseData {
  data: null;
}

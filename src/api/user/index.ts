import { myFetch } from "@/utils/request";

enum API {
  LOGIN_URL = "/users/login",
  REFRESH_URL = "/users/refresh",
  USERINFO_URL = "/users/getUserInfo",
  USERINFO_URL2 = "/users/getUserInfo2",
  REGIST_URL = "/users/regist",
}

export const reqLogin = (data: any) => myFetch.post(API.LOGIN_URL, data);

export const reqRefresh = (data: any) =>
  myFetch.get(API.REFRESH_URL, {
    Authorization: "Bearer " + data.token,
  });
export const reqUserInfo = () => myFetch.get(API.USERINFO_URL);
export const reqUserInfo2 = () => myFetch.get(API.USERINFO_URL2);

export const reqRegist = (data: any) => myFetch.post(API.REGIST_URL, data);

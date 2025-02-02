import { myFetch } from "@/utils/request";

enum API {
  LOGIN_URL = "/users/login",
  USERINFO_URL = "/users/getUserInfo",
  REGIST_URL = "/users/regist",
}

export const reqLogin = (data: any) => myFetch.post(API.LOGIN_URL, data);

export const reqUserInfo = (data) =>
  myFetch.get(API.USERINFO_URL, {
    Authorization: "Bearer " + data.token,
  });
export const reqRegist = (data: any) => myFetch.post(API.REGIST_URL, data);

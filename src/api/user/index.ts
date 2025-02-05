import { myFetch } from "@/utils/request";

enum API {
  LOGIN_URL = "/users/login",
  REFRESH_URL = "/users/refresh",
  USERINFO_URL = "/users/getUserInfo",
  USERINFO_URL2 = "/users/getUserInfo2",
  REGIST_URL = "/users/regist",
  GETVALIDATEIMG_URL = "/users/getValidateImg",
  SENDEMAILCODE_URL = "/users/sendEmailCode/",
}

export const reqLogin = (data) => myFetch.post(API.LOGIN_URL, data);

export const reqRefresh = (data) =>
  myFetch.get(API.REFRESH_URL, {
    Authorization: "Bearer " + data.token,
  });
export const reqUserInfo = () => myFetch.get(API.USERINFO_URL);
export const reqUserInfo2 = () => myFetch.get(API.USERINFO_URL2);

export const reqRegist = (data) => myFetch.post(API.REGIST_URL, data);
export const reqGetValidateImg = () => myFetch.get(API.GETVALIDATEIMG_URL);
export const reqSendEmailCode = (vcode, email) =>
  myFetch.get(API.SENDEMAILCODE_URL + vcode + "?email=" + email);

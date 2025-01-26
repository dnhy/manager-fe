import { myFetch } from "@/utils/request";

enum API {
  LOGIN_URL = "/users/login",
}

export const reqLogin = (data: any) => myFetch.post(API.LOGIN_URL, data);

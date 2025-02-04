import { CODE } from "@/constants/request";
import store from "@/store/index";
import { refreshToken } from "./refresh";

const { VUE_APP_BASE_API } = process.env;
const refreshFn = () => store.dispatch("refreshToken");
const logoutFn = () => store.dispatch("logout");
const myFetch = {
  async post(url: string, data, headers?) {
    const reqFun = () => {
      return fetch(VUE_APP_BASE_API + url, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      });
    };

    const response = await reqFun();
    const res = await response.json();

    if (res.code === CODE.AUTH_ERROR) {
      return refreshToken(reqFun, refreshFn, logoutFn);
    } else {
      return res;
    }
  },

  async get(url: string, headers?) {
    const reqFun = () => {
      return fetch(VUE_APP_BASE_API + url, {
        headers: {
          Authorization: "Bearer " + store.state.userModule.token,
          ...headers,
        },
      });
    };

    const response = await reqFun();
    const res = await response.json();

    if (res.code === CODE.AUTH_ERROR) {
      return refreshToken(reqFun, refreshFn, logoutFn);
    } else {
      return res;
    }
  },
};

export { myFetch };

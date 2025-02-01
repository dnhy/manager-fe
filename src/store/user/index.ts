import { reqLogin, reqUserInfo } from "@/api/user";
import toast from "@/lib/toast";

const userModule = {
  state: () => ({
    userInfo: {
      id: "",
      userName: "",
      userEmail: "",
    },
    token: localStorage.getItem("token") || "",
  }),
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setToken(state, val) {
      state.token = val;
    },
  },
  actions: {
    async login({ commit }, data) {
      const res = await reqLogin(data);
      if (res.code === 200) {
        const { token } = res.data;

        toast.info(res.msg);

        localStorage.setItem("token", token);
        commit("setToken", token);

        return true;
      } else {
        toast.error(res.msg);
      }
    },

    async getUserInfo({ commit, state }) {
      const res = await reqUserInfo({
        token: state.token,
      });

      if (res.code === 200) {
        const { userName, userEmail, _id: id } = res.data;

        commit("setUserInfo", { userName, userEmail, id });
      } else {
        toast.error(res.msg);

        return Promise.reject(res.msg);
      }
    },
  },
  getters: {},
};

export default userModule;

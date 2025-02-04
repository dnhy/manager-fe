import { reqLogin, reqUserInfo, reqRefresh } from "@/api/user";
import toast from "@/lib/toast";

const userModule = {
  state: () => ({
    userInfo: {
      id: "",
      userName: "",
      userEmail: "",
    },
    token: localStorage.getItem("token") || "",
    refreshToken: localStorage.getItem("refreshToken") || "",
  }),
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setToken(state, val) {
      state.token = val;
    },
    setRefreshToken(state, val) {
      state.refreshToken = val;
    },
  },
  actions: {
    async login({ commit }, data) {
      const res = await reqLogin(data);
      if (res.code === 200) {
        const { token, refreshToken } = res.data;

        toast.info(res.msg);

        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        commit("setToken", token);
        commit("setRefreshToken", refreshToken);

        return true;
      } else {
        toast.error(res.msg);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("token");
      commit("setToken", "");
      commit("setRefreshToken", "");

      location.reload();
    },

    async getUserInfo({ commit, state }) {
      const res = await reqUserInfo();

      if (res.code === 200) {
        const { userName, userEmail, _id: id } = res.data;

        commit("setUserInfo", { userName, userEmail, id });
      } else {
        toast.error(res.msg);

        return Promise.reject(res.msg);
      }
    },

    async refreshToken({ commit, state }) {
      try {
        const res = await reqRefresh({
          token: state.refreshToken,
        });
        if (res.code === 200) {
          const { token, refreshToken } = res.data;

          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          commit("setToken", token);
          commit("setRefreshToken", refreshToken);

          return res;
        } else {
          return Promise.reject(res.msg);
        }
      } catch (error) {
        this.dispatch("logout");
      }
    },
  },
  getters: {},
};

export default userModule;

import router from "./router";
import store from "./store/index";
console.log(store);
const { token, userInfo } = store.state.userModule;

router.beforeEach(async (to, from, next) => {
  if (token) {
    if (to.path === "/login") {
      next();
    } else {
      if (userInfo.userName) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          console.log("error :", error);
          next({
            path: "/login",
            query: {
              redirect: to.path,
            },
          });
        }
      }
    }
  }
});

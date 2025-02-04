import router from "./router";
import store from "./store/index";

router.beforeEach(async (to, from, next) => {
  const { token, userInfo } = store.state.userModule;

  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (userInfo.userName) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          next({
            path: "/login",
            query: {
              redirect: to.path,
            },
          });
        }
      }
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.path,
        },
      });
    }
  }
});

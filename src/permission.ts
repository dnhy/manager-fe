import router from "./router";
import store from "./store/index";

router.beforeEach(async (to, from, next) => {
  const { token, userInfo } = store.state.userModule;

  if (token) {
    if (to.path.startsWith("/loginrl")) {
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
            path: "/loginrl/login",
            query: {
              redirect: to.path,
            },
          });
        }
      }
    }
  } else {
    if (to.path.startsWith("/loginrl")) {
      next();
    } else {
      next({
        path: "/loginrl/login",
        query: {
          redirect: to.path,
        },
      });
    }
  }
});

let refreshTokenPromise = null;

export function refreshToken(reqFun, refreshFn, logoutFn) {
  if (!refreshTokenPromise) {
    try {
      refreshTokenPromise = refreshFn();
    } catch (error) {
      console.log("只能回登录页了~", error);
      logoutFn();
    }
  }
  //   重新调用接口
  refreshTokenPromise.then(async () => {
    try {
      const response = await reqFun();

      return response.json();
    } catch (err) {
      console.error("err :", err);
    } finally {
      refreshTokenPromise = null;
    }
  });
}

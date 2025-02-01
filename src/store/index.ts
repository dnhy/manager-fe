import { createStore } from "vuex";
import userModule from "./user";

export default createStore<any>({
  modules: { userModule },
});

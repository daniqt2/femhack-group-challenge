import { createStore } from "vuex";
import UserModule from "./modules/user";
import infoModule from "./modules/info";

export default createStore({
  modules: {
    user: UserModule,
    info: infoModule
  }
});

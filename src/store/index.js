import { createStore } from "vuex";
import UserModule from "./modules/user";
import NotesModule from "./modules/notes";

export default createStore({
  modules: {
    user: UserModule,
    notes: NotesModule
  }
});

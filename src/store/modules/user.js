export class StoreState {
  username = null;
  password = null;
}

export default {
  namespaced: true,
  state() {
    return new StoreState();
  },
  actions: {
    testing() {}
  },
  mutations: {},
  getters: {}
};

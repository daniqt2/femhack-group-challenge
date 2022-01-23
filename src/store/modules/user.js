export class StoreState {
  userName = null;
  points = 0;
  tests = 0;
}

export default {
  namespaced: true,
  state() {
    return new StoreState();
  },
  actions: {
    testing() {}
  },
  mutations: {
    setName(state,name){
      state.userName = name;
    },
    addPoints(state,points){
      state.points += points;
      state.tests += 1;
    }
  },
  getters: {}
};

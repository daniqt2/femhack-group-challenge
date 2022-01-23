export class StoreState {
  idCount = 0;
  notes = {};
}

export default {
  namespaced: true,
  state() {
    return new StoreState();
  },
  mutations: {
    addNote(state, data) {
      console.log("adding note", state.idCount);
      state.notes[state.idCount] = data;
      state.notes[state.idCount].id = state.idCount;
      state.idCount += 1;
    },
    deleteNote(state, id) {
      delete state.notes[id];
    },
    editNote(state, data) {
      const note = state.notes[data.id];
      note.title = data.title;
      note.desc = data.desc;
      note.tags = data.tags;
    }
  }
};

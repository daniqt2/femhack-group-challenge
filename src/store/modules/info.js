import InfoData from '../../data/data.json'

export class StoreState {
  info = InfoData.info
}

export default {
  namespaced: true,
  state() {
    return new StoreState();
  },
};

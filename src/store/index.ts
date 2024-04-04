import { createStore } from "vuex";

export default createStore({
  state: {
    errors: new Map<number, ErrorObject>(),
    errorsThisSession: 0
  },
  getters: {},
  mutations: {
    addError(state, error) {
      state.errors.set(state.errorsThisSession++, new ErrorObject(error, new Date(new Date().getTime() + 6*1000)));
    },
    removeError(state, id) {
      state.errors.delete(id);
    }
  },
  actions: {
    addError({ commit }, error: string) {
      commit("addError", error);
    },
    removeError({ commit }, id: number) {
      commit("removeError", id);
    }
  },
  modules: {},
});

class ErrorObject {
  Error: string
  Time: Date

  constructor(error: string, time: Date) {
    this.Error = error;
    this.Time = time
  }
}

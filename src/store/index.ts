import { createStore } from "vuex";

export default createStore({
  state: {
    errors: new Map<number, ErrorObject>(),
    errorsThisSession: 0,

    //Make this an object
    currentRoomID: 0,
    currentRoomCode: "",
    currentRoomTitle: "",
    votes: []
  },
  getters: {},
  mutations: {
    addError(state, error) {
      state.errors.set(state.errorsThisSession++, new ErrorObject(error, new Date(new Date().getTime() + 6*1000)));
    },
    removeError(state, id) {
      state.errors.delete(id);
    },
    setCurrentRoomID(state, roomID) {
      state.currentRoomID = roomID;
    },
    setRoomCode(state, code) {
      state.currentRoomCode = code;
    },
    setRoomTitle(state, title) {
      state.currentRoomTitle = title;
    }
  },
  actions: {
    addError({ commit }, error: string) {
      commit("addError", error);
    },
    removeError({ commit }, id: number) {
      commit("removeError", id);
    },
    setCurrentRoomID({ commit }, roomID) {
      commit("setCurrentRoomID", roomID);
    },
    setRoomCode({ commit }, code) {
      commit("setRoomCode", code);
    },
    setRoomTitle({ commit }, title) {
      commit("setRoomTitle", title);
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

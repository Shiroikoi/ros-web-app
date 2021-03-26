import Vue from "vue";
import Vuex from "vuex";
import loginPOST from "../api/loginPOST";
import authGET from "../api/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginState: 0,
    auth: false,
    userID: null,
    token: null,
  },
  mutations: {
    userNotFound(state) {
      state.loginState = -1;
    },
    passwordIncorrect(state) {
      state.loginState = -2;
    },
    networkIssue(state) {
      state.loginState = -3;
    },
    authSucess(state) {
      state.loginState = 1;
      state.auth = true;
    },
    authFailed(state) {
      state.auth = false;
    },
    setToken(state, payload) {
      state.userID = payload.id;
      state.token = payload.token;
    },
  },
  actions: {
    async auth({ commit }, header) {
      await authGET(() => {
        commit("authSucess");
      }, header);
    },
    async login({ commit }, data) {
      await loginPOST(
        () => commit("authSucess"),
        () => commit("authFailed") || commit("passwordIncorrect"),
        () => commit("authFailed") || commit("userNotFound"),
        () => commit("authFailed") || commit("networkIssue"),
        data
      )
        .then((payload) => {
          commit("setToken", payload);
        })
        .catch();
    },
  },
  modules: {},
});

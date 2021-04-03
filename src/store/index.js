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
    ROS: null,
  },
  mutations: {
    init(state) {
      state.loginState = 0;
      state.auth = false;
    },
    createROS(state, ROS) {
      state.ROS = ROS;
    },
    userNotFound(state) {
      state.loginState = -1;
    },
    passwordIncorrect(state) {
      state.loginState = -2;
    },
    networkIssue(state) {
      state.loginState = -3;
    },
    authSucess(state, id) {
      state.loginState = 1;
      state.auth = true;
      state.userID = id;
    },
    authFailed(state) {
      state.auth = false;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async logout({ commit }) {
      commit("init");
      commit("setToken", "");
    },
    async auth({ commit }, header) {
      await authGET((id) => {
        commit("authSucess", id);
      }, header)
        .then()
        .catch((err) => {
          console.log(err);
        });
    },
    async login({ commit }, data) {
      await loginPOST(
        (id) => commit("authSucess", id),
        () => commit("authFailed") || commit("passwordIncorrect"),
        () => commit("authFailed") || commit("userNotFound"),
        () => commit("authFailed") || commit("networkIssue"),
        data
      )
        .then((token) => {
          commit("setToken", token);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});

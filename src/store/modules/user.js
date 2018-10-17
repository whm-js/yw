import * as types from "../types";

const state = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  userLoginInfo: JSON.parse(localStorage.getItem("userLoginInfo")) || {}
};

const actions = {
  setUserInfo({ commit }, res) {
    localStorage.setItem("userInfo", JSON.stringify(res));
    commit(types.SET_USER_INFO, res);
  },

  setUserLoginInfo({ commit }, res) {
    localStorage.setItem("userLoginInfo", JSON.stringify(res));
    commit(types.SET_USER_LOGIN_INFO, res);
  },

  userLogout({ commit }) {
    localStorage.removeItem("userLoginInfo");
    commit(types.SET_USER_LOGIN_INFO, {});
  }
};

const getters = {
  userInfo: state => state.userInfo,
  userLoginInfo: state => state.userLoginInfo
};

const mutations = {
  [types.SET_USER_INFO](state, res) {
    state.userInfo = res;
  },
  [types.SET_USER_LOGIN_INFO](state, res) {
    state.userLoginInfo = res;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};

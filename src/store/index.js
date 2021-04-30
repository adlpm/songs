import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    scores: [],
    selectedMusics: [],
    access_token: null,
    refresh_token: null,
  },
  mutations: {
    setScore(state, score) {
      state.score = score;
    },
    setScores(state, scores) {
      state.scores = scores;
    },
    setSelectedMusics(state, selectedMusics) {
      state.selectedMusics = selectedMusics;
    },
    setAccessToken(state, access_token) {
      state.access_token = access_token;
    },
    setRefreshToken(state, refresh_token) {
      state.refresh_token = refresh_token;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});

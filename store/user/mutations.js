import Vue from 'vue';
const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    setVisitedUser(state, user) {
      Vue.set(state.user, 'visitedUser', user);
    },
    setUserMessages(state, messages) {
      Vue.set(state.user, 'messages',messages);
    }
  };

  export default mutations;
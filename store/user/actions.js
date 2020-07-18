
  const actions = {
    visitedUser({commit},user) {
      commit('setVisitedUser', user)
    },
    refreshUserMessages({commit}, messages) {
      commit('setUserMessages', messages);
    }
  }

  export default actions;
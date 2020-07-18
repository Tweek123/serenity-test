  const actions = { 
    async login({dispatch, rootGetters}, name) {
      await dispatch('getUser', name);
      const user = rootGetters['user/user'];
      if(user) {
        await dispatch('getMessages', user.id);
      }
    },    
    async getUser({commit}, name) {
      try {
          const user = await this.$axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/users?name=${name}`)
          
          if(user.length) {
            commit('user/setUser', user[0], { root: true });
          } else {
            commit('user/setUser', null, { root: true });
          }
          
      } catch (error) {
          commit('setFormNameError', {
            status: true,
            message: "Проблемы с сервером"
          }); 
          commit('user/setUser', null, { root: true });
      }
    },
    async getMessages({commit}, id) {
      try {
          const messages = await this.$axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/message?userToId=${id}`);
          commit('user/setUserMessages', messages, { root: true });
      } catch (error) {
          commit('setFormNameError', {
            status: true,
            message: "Проблемы с сервером"
          })
      }
    },
    cancelFormNameError({commit}) {
      commit('setFormNameError', {
        status: false,
        message: ""
      });
    }
  }

  export default actions;
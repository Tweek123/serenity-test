
  const actions = {
    async sendMessage({commit, rootGetters}, text) {
      const user = rootGetters['user/user']; 
      try {
          const res = await this.$axios.$post(`https://my-json-server.typicode.com/Tweek123/json-server/message`, {
                "userToId": user.visitedUser.id,
                "userFromId": user.id,
                "userName": user.name,
                "text": text
          })
      } catch (error) {
        commit('setFormSendMessageError', {
          status: true,
          message: "Проблемы с сервером"
        })
      }
    },
    cancelFormSendMessageError({commit}) {
      commit('setFormSendMessageError', {
        status: false,
        message: ""
      })
    }
  }

  export default actions;
export const state = () => ({
    formSendMessage: {
      error: {
        status: false,
        message: ""
      }
    }
  })

  export const getters = {
    formSendMessage: s => s.formSendMessage
  }
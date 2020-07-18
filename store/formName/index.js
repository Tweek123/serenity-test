  export const state = () => ({
      formName: {
          error: {
            status: false,
            message: ""
          }
        }
    })

  export const getters = {
    formName: s => s.formName,
  }
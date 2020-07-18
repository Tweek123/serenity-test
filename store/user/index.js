export const state = () => ({
    user: null
  })

  export const getters = {
    user: s => s.user,
    visitedUserId: s => s.user.visitedUser.id,
    id: s => s.user.id,
    messages: s => s.user.messages
  }
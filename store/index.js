export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('users/fetchUsers')
  },
  login ({ commit }) {
    commit('setToken', 'true')
  },
  logout ({ commit }) {
    commit('clearToken')
  },
}

export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = null
  }
}

export const getters = {
  isAuth: state => !!state.token
}

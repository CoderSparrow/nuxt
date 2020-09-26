export const state = () => ({
  users: []
})

export const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}

export const actions = {
  fetchUsers ({ commit }) {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((users) => {
        commit('setUsers', users)

        return users
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchUserById ({}, userId) {
    return this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((user) => {
        return user
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

export const getters = {
  users: state => state.users
}

<template>
  <h1>{{ user.name }}</h1>
</template>

<script>
export default {
  validate ({ params}) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params, store, error }) {
    return store.dispatch('users/fetchUserById', params.id)
      .then(user => {
        return {user}
      })
      .catch(e => {
        error(e)
      })
  }
}
</script>

<style scoped>

</style>

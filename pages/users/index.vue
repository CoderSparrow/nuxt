<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user in $store.getters['users/users']" :key="user.id">
        <a href="#" @click.prevent="goTo(user.id)">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // asyncData ({ store, error }) {
  //   return store.dispatch('users/fetchUsers')
  // },
  // async fetch({ store }) {
  //   if (store.getters['users/users'].length === 0)
  //   await store.dispatch('users/fetchUsers')
  // },
  data () {
    return {
      pageTitle: 'Users page'
    }
  },
  methods: {
    goTo (userId) {
      this.$router.push('/users/' + userId)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="goTo(user.id)">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  asyncData ({ $axios, error }) {
    return $axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((users) => {
        return {users}
      })
      .catch((err) => {
        error(err)
      })
  },
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

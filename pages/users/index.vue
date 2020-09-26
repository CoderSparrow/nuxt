<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user in users">
        <a href="#" @click.prevent="goTo(user)">User {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "users",
  asyncData () {
    const users = [1, 2, 3, 4, 5]

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          users
        })
      }, 3000)
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

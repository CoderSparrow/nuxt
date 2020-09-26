<template>
  <section>
    <h1>User page</h1>
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
  data: () => ({
    users: [
      1, 2, 3, 4, 5
    ]
  }),
  methods: {
    goTo (userId) {
      this.$router.push('/users/' + userId)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <form @submit.prevent="onsubmit">
    <h1>Login</h1>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" class="form-control">
    </div>
    <p>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
    <button class="btn btn-primary">Login</button>
  </form>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onsubmit () {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>

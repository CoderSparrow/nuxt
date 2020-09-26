<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nuxt</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link no-prefetch exact active-class="active" class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">Login</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>

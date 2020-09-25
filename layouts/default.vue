<template>
  <div>
    <Navbar/>
    <main class="container">
      <Nuxt />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>

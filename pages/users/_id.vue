<template>
  <h1>{{ user.name}} {{ user.id }}</h1>
</template>

<script>
export default {
  validate ({params}) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params, error }) {
    const user = {
      name: 'Test user',
      id: params.id
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(error(new Error('User not found')))
        // resolve({ user })
      }, 1500)
    })
  }
}
</script>

<style scoped>

</style>

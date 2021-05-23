<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input id="name" v-model="name" type="text" name="name" value>

      <label for="email">Email:</label>
      <input id="email" v-model="email" type="text" name="email" value>

      <label for="password">Password:</label>
      <input id="password" v-model="password" type="text" name="password" value>

      <button type="submit" name="button">Register</button>
      <router-link to="/login">
        Already have account? Login
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterUser',
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push({
          name: 'dashboard'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input id="email" v-model="email" type="text" name="email" value>

      <label for="password">Password:</label>
      <input id="password" v-model="password" type="text" name="password" value>

      <button type="submit" name="button">Login</button>
      <router-link to="/register">
        Don't have account? Register
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginUser',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then(_ => {
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

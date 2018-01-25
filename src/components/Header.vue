<template lang="html">
  <div id="header">
    <b-row>
      <b-col>
        <router-link to="/">
          <b-img center
                src="https://i.imgur.com/6xGSKiP.png"
                fluid alt="Responsive image"
                id="pic" 
                width="400 px"
          />
        </router-link>
      </b-col>
    </b-row>
    <router-link v-if="login_show" to="/login">
      <b-button v-on:click="pressLogin">Login</b-button>
    </router-link>
    <router-link v-if="logout_show" to="/">
      <b-button v-on:click="pressLogout">Logout</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_show: this.$store.state.login,
      logout_show: this.$store.state.logout
    }
  },
  methods: {
    pressLogin () {
      console.log('press login')
      this.$store.dispatch('login')
    },
    pressLogout () {
      console.log('press logout')
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="css">

#pic{
  max-height: 100px;
}
</style>

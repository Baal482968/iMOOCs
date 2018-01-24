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
        <!-- <b-col v-if="login_show == true">
          <router-link to="/login">
            <b-button v-on:click="pressLogin">Login</b-button>
          </router-link>
        </b-col>
        <b-col v-if="logout_show == true">
          <router-link to="/">
            <b-button v-on:click="pressLogout">Logout</b-button>
          </router-link>
        </b-col> -->
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_show: true,
      logout_show: false
    }
  },
  methods: {
    pressLogin () {
      console.log('press login')
      this.login_show = false
      this.logout_show = true
    },
    pressLogout () {
      console.log('press logout')
      this.logout_show = false
      this.login_show = true
    }
  }
}
</script>

<style lang="css">

#pic{
  max-height: 100px;
}
</style>

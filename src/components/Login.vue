<template lang="html">
  <div id="login">
    <div class="jumbotron vertical-center">
      <b-container fluid class="w-25">
        <h1>Please Login</h1>
        <b-row class="my-2">
          <b-col sm="12" class="my-2">
            <b-form-input v-model="username" size="lg" type="text" placeholder="Enter your name"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input v-model="password" size="lg" type="password" placeholder="Enter your password"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
    				<p>Forgot your password? <a href="#">click here</a></p>
            <router-link to="/signup">
    				  <p>New user? <a href="#">create new account</a></p>
            </router-link>
    			</b-col>
        </b-row>
        <b-row class="justify-content-center align-items-center">
          <div class="btn">
            <b-button size="lg" variant="primary" v-on:click="login">Login</b-button>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('login button pressed!')
      console.log(this.$data)
      fetch('https://hidden-crag-31172.herokuapp.com/auth/signin', {
        method: 'POST', // or 'PUT'
        // body: JSON.stringify({
        //   username: this.username,
        //   password: this.password
        // }),
        body: JSON.stringify(this.$data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  text-align: center;
  margin-bottom: 10%;
}
.vertical-center {
  min-height: 60%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 60vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}
.my-3{
  font-size: 130%;
}

</style>

<template lang="html">
  <div id="login">
    <div class="jumbotron vertical-center">
      <b-container fluid class="w-25">
        <h1>Please Sign Up</h1>
        <b-row class="my-2">
          <b-col sm="12" class="my-2">
            <b-form-input v-model="name" size="lg" type="text" placeholder="Enter your real name"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input v-model="username" size="lg" type="text" placeholder="Enter your user name"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input v-model="password" size="lg" type="text" placeholder="Enter your password"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input v-model="position" size="lg" type="text" placeholder="Enter your position"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-radio-group id="gender" v-model="gender" :options="gender_options">
            </b-form-radio-group>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input v-model="email" size="lg" type="email" placeholder="Enter your email"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-select v-model="education" :options="education_options" class="mb-3">
            </b-form-select>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input v-model="picaddr" size="lg" type="text" placeholder="Enter your picaddr"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-textarea id="introduction"
                     v-model="introduction"
                     placeholder="Introduce yourself"
                     :rows="3"
                     :max-rows="6">
            </b-form-textarea>
          </b-col>
        </b-row>
        <b-row class="justify-content-center align-items-center">
          <div class="btn">
            <b-button size="lg" variant="primary" v-on:click="signup">Sign Up</b-button>
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
      name: '',
      username: '',
      password: '',
      position: '',
      gender: '',
      email: '',
      picaddr: '',
      education: null,
      introduction: '',
      role: '',
      gender_options: [
        {text: 'Male', value: 'm'},
        {text: 'Female', value: 'f'},
        {text: 'Other', value: 'o'}
      ],
      education_options: [
        {text: 'Select your education status', value: null},
        {text: 'High School', value: 'h'},
        {text: 'Bachelor Degree', value: 'b'},
        {text: 'Master Degree', value: 'm'},
        {text: 'PhD', value: 'p'}
      ]
    }
  },
  methods: {
    signup () {
      console.log('login button pressed!')
      console.log(this.name)
      fetch('https://hidden-crag-31172.herokuapp.com/auth/signup', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.$data),
        credentials: 'include',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response)
        window.location.replace('/login#/login')
      })
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

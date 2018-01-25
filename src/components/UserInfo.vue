<template lang="html">
  <b-card :title="usersProfile.name"
          :img-src="usersProfile.picaddr"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">Email: {{usersProfile.email}}</p>
    <p class="card-text">Position: {{usersProfile.position}}</p>
    <p class="card-text">introduction:<br/> {{ usersProfile.introduction }}</p>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      usersProfile: ''
    }
  },
  created () {
    fetch('https://hidden-crag-31172.herokuapp.com/info', {credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        console.log(json)
        console.log('test')
        this.usersProfile = json
      })
  }
}
</script>

<style lang="css">
</style>

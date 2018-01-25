<template lang="html">
  <div>
    <h1>{{this.currentCourses.c_name}}</h1>
    <ol>
        <li v-for="course in currentCourses">
            <b-card :title="course.cls_name"
            :img-src="course.cls_img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-6">
            <b-embed type="iframe"
            aspect="16by9"
            :src="course.cls_url"
            allowfullscreen
            ></b-embed>
            <div>
              <user-notes></user-notes>
            </div>
            </b-card>
        </li>
      </ol>
      <div>
        <b-button v-on:click="finish" variant="danger">Finish</b-button>
      </div>
  </div>
</template>

<script>
import UserNotes from './UserNotes.vue'

export default {
  components: {
    'user-notes': UserNotes
  },
  data () {
    return {
      search: '',
      currentCourses: ''
    }
  },
  created () {
    fetch('https://hidden-crag-31172.herokuapp.com/courses/' + this.$route.params._id + '/lessons', {credentials: 'include'})
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.currentCourses = json
    })
  },
  methods: {
    finish () {
      fetch('https://hidden-crag-31172.herokuapp.com/courses/' + this.$route.params._id + '/complete', {credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        console.log(json)
        window.location.replace('../../')
      })
    },
    commit (_id) {
      fetch('https://hidden-crag-31172.herokuapp.com/lessons/' + _id + '/notes')
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  margin-bottom: 3%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>

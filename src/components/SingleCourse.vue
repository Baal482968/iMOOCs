<template lang="html">
  <div>
    <h1>{{this.currentCourses.c_name}}</h1>
    <ol>
        <li v-for="course in currentCourses.c_classes">
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
              <b-button href="#" variant="primary">Comment</b-button>
              <b-button href="#" variant="primary">Rate</b-button>
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
export default {
  data () {
    return {
      search: '',
      currentCourses: ''
    }
  },
  created () {
    fetch('https://hidden-crag-31172.herokuapp.com/courses/' + this.$route.params._id, {credentials: 'include'})
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
      })
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

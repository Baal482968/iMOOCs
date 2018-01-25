<template lang="html">
  <div>
    <h1>My learning courses</h1>
    <ol>
      <li v-for="course in learningCourses">
        <b-card :title="course.c_name"
          :img-src="course.c_img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 50rem;"
          class="mb-6">
        <p class="card-text">
          {{course.c_brief}}
        </p>
        <b-embed type="iframe"
           aspect="16by9"
           :src="course.c_video.v_url"
           allowfullscreen
        ></b-embed>
        </b-card>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      learningCourses: []
    }
  },
  created () {
    fetch('https://hidden-crag-31172.herokuapp.com/learning', {credentials: 'include'})
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.learningCourses = json
    })
  }
}
</script>

<style lang="css" scoped>
h1{
  margin-bottom: 3%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>

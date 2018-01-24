<template lang="html">
  <div>
    <h1>All courses</h1>
    <div>
    <b-form-input v-model="search"
                  type="text"
                  placeholder="Find the courses you want"></b-form-input>
    </div>
    <div>
      <ol>
        <li v-for="course in allCourses">
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
            <div>
              <router-link :to="'course/'+course._id">
                <b-button variant="warning">Start</b-button>
              </router-link>
            </div>
            <br/>
            <div>
              <b-button href="#" variant="primary">Comment</b-button>
              <b-button href="#" variant="primary">Rate</b-button>
            </div>
            </b-card>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      Courses: []
    }
  },
  created () {
    fetch('https://hidden-crag-31172.herokuapp.com/courses')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.Courses = json
    })
  },
  computed: {
    allCourses () {
      return this.Courses.filter((course) => {
        return course.c_name.match(this.search)
      })
    }
  }
}

</script>

<style lang="css">
</style>
<template lang="html">
  <div>
<b-card bg-variant="light">
  <b-form @reset="onReset" v-if="show">
    <b-form-group horizontal
                  breakpoint="lg"
                  label="Add Course"
                  label-size="lg"
                  label-class="font-weight-bold pt-0"
                  class="mb-0">
      <b-form-group horizontal
                    label="Select Course:"
                    label-class="text-sm-right"
                    label-for="nestedCourse">
        <b-form-select v-model="choosenCourse" 
                    :options="course_options" 
                    class="mb-3" 
                    id="nestedCourse"
                    :aria-invalid="true" required>
        </b-form-select>
      </b-form-group>
      <b-form-group horizontal
                    label="Class Name:"
                    label-class="text-sm-right"
                    label-for="nestedName">
        <b-form-input id="nestedName" v-model="cls_name" required></b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    label="Class Content:"
                    label-class="text-sm-right"
                    label-for="nestedContent">
        <b-form-textarea id="nestedContent"
                    v-model="cls_content"
                    placeholder="Enter something"
                    :rows="5"
                    :max-rows="10" required>
        </b-form-textarea>
      </b-form-group>
      <b-form-group horizontal
                    label="Class URL:"
                    label-class="text-sm-right"
                    label-for="nestedURL">
        <b-form-input id="nestedURL" required></b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    label="Image URL:"
                    label-class="text-sm-right"
                    label-for="nestedImage">
        <b-form-input id="nestedImage" v-model="cls_img" required></b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    label="Episode Type:"
                    label-class="text-sm-right"
                    class="mb-0">
        <b-form-radio-group class="pt-2" :options="cls_types" v-model="cls_choosenType" required/>
      </b-form-group>
      <br/>
      <b-button type="button" v-on:click.prevent="onSubmit()" variant="primary" v-if="submit">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form-group>
  </b-form>
</b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allCourses: [],
      choosenCourse: null,
      course_options: [
        { text: 'Select Course', value: null }
      ],
      cls_name: '',
      cls_content: '',
      cls_url: '',
      cls_img: '',
      cls_types: ['Regular', 'Final', 'Special'],
      cls_choosenType: '',
      show: true,
      submit: true
    }
  },
  beforeMount () {
    setTimeout(() => {
      fetch('https://hidden-crag-31172.herokuapp.com/courses', {credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.allCourses = json
        for (var i = 0; i < Object.keys(json).length; i++) {
          console.log(json[i].c_name)
          this.course_options.push({value: json[i]._id, text: json[i].c_name})
        }
      })
    }, 500)
  },
  methods: {
    onSubmit () {
      console.log(this.cls_name)
      fetch('https://hidden-crag-31172.herokuapp.com/courses/' + this.choosenCourse + '/lessons', {
        method: 'POST', // or 'PUT'
        mode: 'cors',
        body: {
          'cls_name': this.cls_name,
          'cls_content': this.cls_content,
          'cls_url': this.cls_url,
          'cls_img': this.cls_img
        },
        credentials: 'include',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response)
        // window.location.replace('../')
      })
    },
    onReset (evt) {
      console.log('reset!')
      evt.preventDefault()
      /* Reset our form values */
      this.course = null
      this.cls_name = ''
      this.cls_content = ''
      this.cls_url = ''
      this.cls_img = ''
      this.cls_choosenType = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    checkingCourse () {
      console.log(this.choosenCourse)
      console.log(this.allCourses)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div>
<b-card bg-variant="light">
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
      <b-form-select v-model="course" 
                  :options="course_options" 
                  class="mb-3" 
                  id="nestedCourse"
                  :aria-invalid="true">
      </b-form-select>
      <b-button variant="success">Check Course Status</b-button>
    </b-form-group>
    <b-form-group horizontal
                  label="Class Name:"
                  label-class="text-sm-right"
                  label-for="nestedName">
      <b-form-input id="nestedName" v-model="cls_name"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="Class Content:"
                  label-class="text-sm-right"
                  label-for="nestedContent">
      <b-form-textarea id="nestedContent"
                  v-model="cls_content"
                  placeholder="Enter something"
                  :rows="5"
                  :max-rows="10">
      </b-form-textarea>
    </b-form-group>
    <b-form-group horizontal
                  label="Class URL:"
                  label-class="text-sm-right"
                  label-for="nestedURL">
      <b-form-input id="nestedURL"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="Upload Image:"
                  label-class="text-sm-right"
                  label-for="nestedImage">
      <b-form-file id="nestedImage" v-model="cls_img"></b-form-file>
    </b-form-group>
    <b-form-group horizontal
                  label="Episode Type:"
                  label-class="text-sm-right"
                  class="mb-0">
      <b-form-radio-group class="pt-2" :options="['Regular', 'Final', 'Special']" />
    </b-form-group>
    <br/>
    <b-button type="submit" variant="primary" :disabled="true">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form-group>
</b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      course: null,
      course_options: [
        { text: 'Select Course', value: null },
        'Data Base', 'System Analysis Design', 'System Engineering', 'Python'
      ],
      cls_name: '',
      cls_content: '',
      cls_url: '',
      cls_img: '',
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style lang="css" scoped>
</style>

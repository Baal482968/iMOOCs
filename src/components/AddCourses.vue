<template lang="html">
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="addCourseInputGroup1"
                    label="Course Information:"
                    label-for="addcourseInput1"
                    description="Please enter full name of this course">
        <b-form-select id="addcourseInput1"
                      :options="types"
                      required
                      v-model="form.type">
        </b-form-select>
        <b-form-input id="addcourseInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter Course Name">
        </b-form-input>
        <b-form-file id="file_input1" v-model="img"></b-form-file>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        type: '',
        name: '',
        food: null,
        checked: []
      },
      img: '',
      types: [
        { text: 'Select type', value: null },
        'Data Base', 'System Analysis Design', 'System Engineering', 'Python'
      ],
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

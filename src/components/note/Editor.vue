<template>
  <div id="note-editor">
    <div>
      <b-form-select v-model="courseSelected" :options="courseOptions" class="mb-3">
      </b-form-select>
      <b-form-select v-model="typeSelected" :options="typeOptions" class="mb-3">
      </b-form-select>
    </div>
    <div>
      <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
      </b-form-textarea>
    </div>
    <div>
      <b-form-group label="Score">
        <b-form-radio-group v-model="score"
                            :options="scoreOptions"
                            name="radioInline">
        </b-form-radio-group>
      </b-form-group>
    </div>
    <div>
      <b-button size="lg" variant="primary" v-on:click="noteSubmit">Submit</b-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      courseSelected: null,
      courseOptions: [
        { value: null, text: 'Please select a course' },
        { value: 'a', text: 'System Analysis Design' },
        { value: 'b', text: 'Data Base' },
        { value: {'C': '3PO'}, text: 'System Engineering' },
        { value: 'd', text: 'Other reason', disabled: false }
      ],
      typeSelected: null,
      typeOptions: [
        { value: null, text: 'Please select a type' },
        { value: 'a', text: 'Support course' },
        { value: 'b', text: 'Complaint' },
        { value: {'C': '3PO'}, text: 'Feedback' },
        { value: 'd', text: 'Other reason', disabled: false }
      ],
      text: '',
      score: '',
      scoreOptions: [
        { text: '5', value: 5 },
        { text: '4', value: 4 },
        { text: '3', value: 3 },
        { text: '2', value: 2 },
        { text: '1', value: 1 }
      ]
    }
  },
  methods: {
    noteSubmit () {
    }
  }
}
</script>
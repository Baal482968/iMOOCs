<template>
  <div id="note-editor">
    <div>
      <b-form-select v-model="selected" :options="options" class="mb-3">
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
  </div>
</template>

<script>

export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Support course' },
        { value: 'b', text: 'Complaint' },
        { value: {'C': '3PO'}, text: 'Feedback' },
        { value: 'd', text: 'Other reason', disabled: false }
      ],
      text: ''
    }
  }
}
</script>
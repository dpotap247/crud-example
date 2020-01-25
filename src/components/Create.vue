<template>
  <div >
    <form-component @input="submit"></form-component>
  </div>
</template>

<script>
import Form from './Form.vue'

export default {
  name: 'Create',
  components: {
    'form-component': Form
  },
  methods:{
    submit(title, text){
      this.$axios
        .post(process.env.VUE_APP_API_URL + '/', {
          "title": title,
          "body": text
        })
        .then(response => {
          console.log('update'+ response)
        })
        .catch(err => {
          console.log(err)
      })
    }
  }
}
</script>

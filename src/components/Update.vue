<template>
  <div class="update">
    <form-component  @input="submit"></form-component>
  </div>
</template>

<script>

import Form from './Form.vue'

export default {
  name: 'Update',
  components:{
    'form-component': Form
  },
  date(){
    return{
      title: undefined,
      text: undefined 
    }
  },
  methods:{
    submit(title, text){
      this.$axios
        .put(process.env.VUE_APP_API_URL + '/' + this.$route.params.id, {
          "title" : title,
          "body"  : text
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

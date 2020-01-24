<template>
  <div id="form">
    <v-form  ref="form" lazy-validation>

      <v-text-field v-if="$route.params.id" 
                    v-model = "title" 
                    label = "Title" 
                    :value = "title"
                    required> </v-text-field>
      
      <v-text-field v-else 
                    v-model = "title" 
                    label = "Title" 
                    required> </v-text-field>

      <v-text-field v-if="$route.params.id" 
                    v-model = "text" 
                    label = "Text" 
                    :value = "text"
                    required> </v-text-field>
      
      <v-text-field v-else 
                    v-model = "text" 
                    label = "Text" 
                    required> </v-text-field>

      <v-btn color="primary" @click="submit">
        Submit
      </v-btn>

   </v-form>
  </div>  
</template>

<script>
  export default {
    name: 'Form',
     data(){
      return{
        title: undefined,
        text: undefined
      }
    },
    mounted: function(){
      if(this.$route.params.id){
        this.loadData()
      }
    },
    methods:{
      loadData(){
        this.$axios
          .get(process.env.VUE_APP_API_URL + '/' + this.$route.params.id)
          .then(response => {
            this.title = response.data.title;
            this.text = response.data.body
          })
          .catch(err=> {
            console.log(err)
          })
      },
      submit(){
       this.$emit('input', this.title, this.text)
      }, 
    }
  }
</script>

<style scoped>
  #form{
    padding: 20px;
  }
</style>
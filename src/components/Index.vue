<template>
  <div class="index">
    
    <v-simple-table >
      
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Text</th>
            <th></th>   
            <th></th>  
            <th></th>       
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in posts" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
            <td>
              <a  :href="'view/' + item.id" color="primary"
                   >
                  <v-icon color="primary">mdi-eye</v-icon>
              </a> 
            </td>
            <td>
              <a :href="'update/' + item.id"  
                  color="" 
                  >
                  <v-icon  color="primary">mdi-pencil</v-icon>
              </a>
            </td>
            <td>
              <v-btn color="error" 
                     small 
                     @click="deletePost(item.id)">
                <v-icon dark>mdi-cancel</v-icon>
               
              </v-btn>
            </td> 
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
 

export default {

  name: 'Index',
  data() {
    return{
      posts: undefined,
    }
  },
  mounted: function(){
    this.loadData()
  },
  methods:{
    loadData(){
      this.$axios
        .get(process.env.VUE_APP_API_URL)
        .then(response => {
          this.posts = response.data;
          console.log(response)
        })
    },
    deletePost(id){
      this.$axios
        .delete(process.env.VUE_APP_API_URL + '/' + id)
        .then(response => {
          console.log('delete elem'+ response)
          this.loadData()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>


<template>
  <div class="view">
     <v-simple-table >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Text</th>      
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'View',
  props: {
    msg: String
  },
  data(){
    return{
      item: undefined
    }
  },
  mounted: function(){
    this.loadItem();
  },
  methods:{
    loadItem(){
      this.$axios
        .get(process.env.VUE_APP_API_URL + '/' + this.$route.params.id)
        .then(response => {
          this.item = response.data
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

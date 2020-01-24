<template>
  <div class="index">
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return{
      msg: 'Index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <div  class="d-flex justify-space-between align-center col-12">
        <span class="mr-2">My Crud</span>
        <a href="/create" >
          <v-icon x-large color="green">mdi-plus</v-icon>
        </a>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
  a{
    text-decoration: none;
  }

</style>
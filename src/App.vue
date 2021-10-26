<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-4"
      dark
      elevation="1"
    >
      <v-spacer></v-spacer>
      <v-btn text to="/" color="#0099ee" class="mr-1">
        <v-icon>mdi-timer-outline</v-icon>
      </v-btn>

      <v-btn text to="/timer" color="#0099ee" class="ml-1">
        <v-icon>mdi-timer-sand</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main style="backgroundColor: #121212;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

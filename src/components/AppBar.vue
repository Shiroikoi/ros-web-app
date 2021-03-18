<template>
  <v-app-bar app color="#37474f" flat dense dark>
    <router-link to="/">
      <v-img :src="src" max-width="100"> </v-img>
    </router-link>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar",
    data: () => ({
      src: require("../assets/ros_logo_white.png"),
    }),
  };
</script>

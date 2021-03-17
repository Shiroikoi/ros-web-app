<template>
  <v-app-bar app color="#616161" dark>
    <v-img :src="src" max-width="100"> </v-img>
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

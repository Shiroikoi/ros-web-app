<template>
  <v-app-bar app color="#37474f" dark>
    <v-img :src="src" max-width="100"> </v-img>
    <template v-slot:extension>
      <v-tabs align-with-title color="#ffa726">
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template>
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

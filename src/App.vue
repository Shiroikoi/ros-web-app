<template>
  <v-app>
    <AppBar />
    <router-view />
  </v-app>
</template>

<script>
  import AppBar from "./components/AppBar";

  export default {
    name: "App",

    components: {
      AppBar,
    },

    data: () => ({
      
    }),
  };
</script>
<style lang="scss"></style>

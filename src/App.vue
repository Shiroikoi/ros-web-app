<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />

    <Main />
  </v-app>
</template>

<script>
  import AppBar from "./components/AppBar";
  import NavigationDrawer from "./components/NavigationDrawer";
  import Main from "./components/Main";

  export default {
    name: "App",

    components: {
      NavigationDrawer,
      AppBar,
      Main,
    },

    data: () => ({
      //
    }),
  };
</script>
<style lang="scss">

</style>

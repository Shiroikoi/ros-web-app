<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import AppBar from "./components/AppBar";
  import NavigationDrawer from "./components/NavigationDrawer";

  export default {
    name: "App",

    components: {
      NavigationDrawer,
      AppBar,
    },

    data: () => ({
      //
    }),
  };
</script>
<style lang="scss"></style>

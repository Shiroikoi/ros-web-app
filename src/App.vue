<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />

    <v-main> </v-main>
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

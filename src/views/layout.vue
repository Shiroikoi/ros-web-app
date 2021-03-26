<template>
  <div>
    <NavigationDrawer />
    <v-main app>
      <router-view />
    </v-main>
  </div>
</template>

<script>
  import NavigationDrawer from "../components/NavigationDrawer";

  export default {
    name: "layout",
    components: { NavigationDrawer },
  };
</script>

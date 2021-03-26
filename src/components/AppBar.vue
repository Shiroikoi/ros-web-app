<template>
  <v-app-bar app color="#37474f" flat dense dark>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/">
          <v-img :src="src" max-width="100" v-bind="attrs" v-on="on"> </v-img>
        </router-link>
      </template>
      <span>Index page</span>
    </v-tooltip>

    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <span>search</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" to="/login">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <span>my account</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>github</span>
    </v-tooltip>
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

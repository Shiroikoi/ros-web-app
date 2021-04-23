<template>
  <v-app-bar app color="#37474f" flat dense dark class="pr-12">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/">
          <v-img :src="src" max-width="110" v-bind="attrs" v-on="on"> </v-img>
        </router-link>
      </template>
      <span>Index page</span>
    </v-tooltip>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#546e7a" class="px-3 ma-1" tile v-bind="attrs" v-on="on"><v-icon class="pr-2">mdi-magnify</v-icon>search</v-btn>
      </template>
      <span>search</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#546e7a" class="px-3 ma-1" tile v-bind="attrs" v-on="on" to="/login"><v-icon class="pr-2">mdi-account-circle</v-icon>login</v-btn>
      </template>
      <span>my account</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#546e7a" class="px-3 ma-1" tile v-bind="attrs" v-on="on"><v-icon class="pr-2">mdi-github</v-icon>github</v-btn>
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

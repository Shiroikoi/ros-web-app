<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>
</template>
<script>
  export default {
    name: "NavigationDrawer",
    data: function() {
      return { drawer: true, mini: false };
    },
  };
</script>

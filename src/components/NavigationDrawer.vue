<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" color="#62727b" app permanent dark>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
      </v-list-item-content>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>123</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>123</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>123</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-icon :color="active ? color : 'white'">mdi-view-dashboard</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                123
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2" color="#ff9800">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
  export default {
    name: "NavigationDrawer",
    data: function() {
      return { drawer: true, mini: false, color: "#ffa726" };
    },
  };
</script>
<style lang="scss" scoped>
  .class1 {
    color: #ffa726 !important;
  }
</style>

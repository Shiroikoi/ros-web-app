<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    color="#62727b"
    app
    permanent
    dark
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="require('../assets/logo.svg')"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ name }}</v-list-item-title>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-subtitle v-bind="attrs" v-on="on">
              {{ email }}
            </v-list-item-subtitle>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-list-item-content>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="list in lists" :key="list.text" :to="list.link">
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-icon :color="active ? color : 'white'">{{ list.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ list.text }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="#ffa726" v-if="!mini" @click="logout">
          Logout
        </v-btn>
        <v-btn color="#ffa726" small fab v-if="mini">
          <v-icon>mdi-account-arrow-right</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    name: "NavigationDrawer",
    data: function() {
      return {
        drawer: true,
        mini: false,
        color: "#ffa726",
      };
    },
    computed: {
      lists: function() {
        return [
          { text: "My Profile", icon: "mdi-account-details", link: "" },
          {
            text: "Control Panel",
            icon: "mdi-view-dashboard",
            link: `/user/${this.userID}/ControlPanel`,
          },
          {
            text: "TODO1",
            icon: "mdi-view-dashboard",
            link: "/user/" + this.userID + "/TODO1",
          },
          {
            text: "TODO2",
            icon: "mdi-view-dashboard",
            link: `/user/${this.userID}/TODO2`,
          },
          {
            text: "About",
            icon: "mdi-alert-circle-outline",
            link: `/user/${this.userID}/About`,
          },
        ];
      },
      ...mapState(["loginState", "auth", "userID", "token", "name", "email"]),
    },
    methods: {
      async logout() {
        await this.$store.dispatch("logout");

        localStorage.setItem("ROS-token", this.token);
        this.$router.push({ path: "/login" });
      },
    },
  };
</script>
<style lang="scss" scoped></style>

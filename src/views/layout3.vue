<template>
  <v-main app>
    <transition enter-active-class="">
      <router-view />
    </transition>
  </v-main>
</template>

<script>
  export default {
    name: "layout3",
    data: () => ({ handle: false }),
    beforeRouteEnter(to, from, next) {
      if (to.fullPath.match("deny=1")) {
        next((vm) => {
          console.log(vm);
          vm.handle = true;
        });
      } else {
        next();
      }
    },
    watch: {
      $route(to) {
        if (to.fullPath.match("deny=1")) {
          this.handle = true;
        }
      },
    },
    computed: {
      an1() {
        return this.handle ? "animate__animated animate__tada" : "";
      },
      an2() {
        return this.handle ? "animate_tada" : "yyy";
      },
    },
  };
</script>

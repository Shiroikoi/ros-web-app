<template>
  <v-main app>
    <transition enter-active-class="animate__animated animate__tada">
      <router-view />
    </transition>
  </v-main>
</template>

<script>
  export default {
    name: "layout2",
  };
</script>
<style></style>

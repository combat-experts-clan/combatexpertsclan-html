<script>
/**
 * App.vue
 * Application, starting-point, managed by the vue-router.
 */
export default {
  components: {
    BaseToolbar: () => import("@/components/base/Toolbar")
  }
};
</script>

<template>
  <v-app>
    <base-toolbar v-on:drawer-click="drawer = !drawer"></base-toolbar>
    <router-view></router-view>
  </v-app>
</template>

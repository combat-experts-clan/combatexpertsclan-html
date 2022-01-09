<script>
/**
 * Members.vue
 * Parent component for the members page.
 */
export default {
  data: function() {
    return {
      parallaxImage: require("@/assets/wp/reach-wp-wide.png")
    };
  },
  components: {
    MemberFeed: () => import("@/views/members/MemberFeed")
  }
};
</script>

<template>
  <div>
    <!-- Parallax container -->
    <v-container fluid class="ma-0 pa-0">
      <v-parallax :src="parallaxImage" height="250">
        <h1 class="display-3 align-self-center justify-self-center">Members</h1>
      </v-parallax>
    </v-container>

    <!-- Member feed -->
    <member-feed></member-feed>
  </div>
</template>

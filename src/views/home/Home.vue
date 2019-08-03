<script>
/**
 * Home.vue
 * Parent component for the landing page.
 */
export default {
  components: {
    HeroImage: () => import("@/components/HeroImage"),
    HomeFeed: () => import("@/views/home/HomeFeed")
  }
};
</script>

<template>
  <v-container fluid pa-0>
    <!-- Hero image -->
    <hero-image
      v-bind:image="require('@/assets/banners/infinite-desert-grad-mute.jpg')"
    >
      Strength, determination, merciless, forever
    </hero-image>

    <!-- Home feed -->
    <home-feed></home-feed>

    <!-- Twitter feed -->
    <twitter-feed></twitter-feed>

    <!-- Discord feed -->
    <discord-feed></discord-feed>
  </v-container>
</template>

<style lang="scss" scoped>
#home-feed {
  background-image: url("../../assets/textures/prism.png");
  background-repeat: repeat;
}
</style>

<template>
  <v-container fluid pa-0>
    <hero-image
      v-bind:image="require('@/assets/banners/infinite-desert-grad-mute.jpg')"
    >
      Strength, determination, merciless, forever
    </hero-image>
    <home-feed></home-feed>
    <twitter-feed></twitter-feed>
    <discord-feed></discord-feed>
  </v-container>
</template>

<script>
export default {
  components: {
    HeroImage: () => import("@/components/HeroImage"),
    HomeFeed: () => import("@/views/home/HomeFeed")
  }
};
</script>

<style lang="scss" scoped>
#home-feed {
  background-image: url("../../assets/textures/prism.png");
  background-repeat: repeat;
}
</style>

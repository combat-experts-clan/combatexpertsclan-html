<template>
  <v-container fluid pa-0>
    <header>
      <hero-image
        :image="require('@/assets/wp/infinite-desert-grad-mute.jpg')"
        :height="500"
      >
        <h1
          :class="{
            'display-1': $vuetify.breakpoint.mdAndDown,
            'display-2': $vuetify.breakpoint.lgAndUp,
            'mb-5': true
          }"
        >
          Strength, Determination, Merciless, Forever.
        </h1>
        <p class="subtitle-1 text-center mb-5">
          We are all here because we have an addiction to the greatest game ever
          created.<br />
          Like you, we want to be part of an international group of individuals
          who share this interest.
        </p>
        <v-btn href="/recruiting">Join Now</v-btn>
      </hero-image>
    </header>

    <main id="home-feed">
      <v-container>
        <!-- Home feed -->
        <home-feed></home-feed>

        <!-- Twitter feed -->
        <twitter-feed></twitter-feed>

        <!-- Discord feed -->
        <discord-feed></discord-feed>
      </v-container>
    </main>
  </v-container>
</template>

<script>
/**
 * Home.vue
 * Parent component for the landing page.
 */
export default {
  components: {
    HeroImage: () => import("@/components/HeroImage"),
    HomeFeed: () => import("./HomeFeed"),
    DiscordFeed: () => import("./DiscordFeed"),
    TwitterFeed: () => import("./TwitterFeed")
  }
};
</script>

<style lang="scss" scoped>
#home-feed {
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.068),
      rgba(31, 4, 24, 0.73)
    ),
    url("../../assets/textures/dark-honeycomb.png");
  background-repeat: repeat;
}
</style>

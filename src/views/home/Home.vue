<template>
  <v-container fluid pa-0>
    <header>
      <hero-image
        :image="require('@/assets/wp/infinite-desert-grad-mute.jpg')"
        :height="500"
      >
        <v-content id="hero-content">
          <v-layout row text-center justify-center align-center>
            <!-- Hero header -->
            <v-flex xs12>
              <h1 class="ma-3" :class="headerClasses">
                Strength, Determination, Merciless, Forever.
              </h1>
            </v-flex>
          </v-layout>

          <!-- Hero caption -->
          <v-layout row text-center justify-center align-center>
            <v-flex md6 sm9 xs12>
              <p class="subtitle-1 ma-3">
                We are all here because we have an addiction to the greatest
                game ever created. Like you, we want to be part of an
                international group of individuals who share this interest.
              </p>
            </v-flex>
          </v-layout>

          <!-- Hero link buttons -->
          <v-layout row text-center justify-center align-center>
            <v-flex xs12>
              <v-btn class="mx-1 my-3" to="/recruiting">
                Join Now
              </v-btn>
              <v-btn class="mx-1 my-3 blue darken-4" :href="discordUrl">
                Join Discord
              </v-btn>
            </v-flex>
          </v-layout>
        </v-content>
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
  },

  data() {
    return {
      discordUrl: `${process.env.VUE_APP_DISCORD_INVITE_URL}`
    };
  },

  computed: {
    headerClasses() {
      return {
        "display-1": this.$vuetify.breakpoint.mdAndDown,
        "display-2": this.$vuetify.breakpoint.lgAndUp
      };
    }
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
#hero-content {
  align-items: center;
}
</style>

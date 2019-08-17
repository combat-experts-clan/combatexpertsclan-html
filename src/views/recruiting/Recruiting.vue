<template>
  <v-container fluid pa-0>
    <header>
      <hero-image
        :image="require('@/assets/wp/infinite-desert-grad-mute.jpg')"
        :height="250"
      >
        <v-container>
          <v-layout row wrap justify-end>
            <v-flex shrink>
              <h1 class="display-1">Recruiting Center</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </hero-image>
    </header>

    <main id="home-feed">
      <v-container>
        <v-layout row wrap>
          <v-flex mx-5>
            <v-form>
              <h1 class="display-1 my-3 mb-5">About Me</h1>

              <!-- Clan name -->
              <v-text-field
                label="Desired Clan Name"
                :prefix="tagPrefix"
                @focus="tagPrefix = '=CE='"
                @blur="tagPrefix = ''"
                filled
              ></v-text-field>
              <p>This is the nickname that you will be using in-game.</p>

              <!-- Discord ID -->
              <v-text-field
                label="Discord"
                :placeholder="discordPlaceholder"
                @focus="discordPlaceholder = 'Discord#1234'"
                @blur="discordPlaceholder = ''"
                filled
              ></v-text-field>
              <p class="subtitle-1">We communicate primarily via Discord.</p>

              <!-- Flag question -->
              <v-textarea
                label="If you and your teammate were in a hopeless firefight next to the flag, you would..."
                filled
              ></v-textarea>

              <!-- Hack/cheat -->
              <p>
                Have you ever used a hack or cheat to gain an unfair advantage
                over others during online play?
              </p>

              <v-radio-group row>
                <v-radio label="No"></v-radio>
                <v-radio label="Yes"></v-radio>
              </v-radio-group>
              <p class="subtitle-1">We are an integrity-based clan.</p>

              <!-- About me -->
              <v-textarea label="Tell us a little bit about yourself">
              </v-textarea>
              <p class="subtitle-1">
                We look for people that represent themselves well, and we would
                like to know who's going to be with us. Who are you?
              </p>
            </v-form>
          </v-flex>
        </v-layout>

        <!-- Action buttons -->
        <v-layout row wrap justify-end>
          <v-flex shrink mr-5>
            <v-btn justify-end>Submit Application</v-btn>
          </v-flex>
        </v-layout>
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
    HeroImage: () => import("@/components/HeroImage")
  },

  data() {
    return {
      discordUrl: `${process.env.VUE_APP_DISCORD_INVITE_URL}`,
      tagPrefix: "",
      discordPlaceholder: ""
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

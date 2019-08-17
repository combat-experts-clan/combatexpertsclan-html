<template>
  <v-container fluid pa-0>
    <header>
      <hero-image
        :image="require('@/assets/wp/infinite-rings.jpg')"
        :height="250"
      >
        <v-container>
          <v-layout row wrap>
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
              <h1 class="display-1 py-3">About Me</h1>

              <!-- Clan name -->
              <v-text-field
                label="Desired Clan Name"
                hint="This is the nickname that you will be using in-game."
                :placeholder="namePlaceholder"
                :prefix="tagPrefix"
                @focus="
                  tagPrefix = '=CE=';
                  namePlaceholder = randomName;
                "
                @blur="
                  tagPrefix = '';
                  namePlaceholder = '';
                "
                class="my-3"
                filled
              ></v-text-field>

              <!-- Discord ID -->
              <v-text-field
                label="Discord"
                hint="We communicate primarily via Discord."
                :placeholder="discordPlaceholder"
                @focus="discordPlaceholder = randomName + '#1337'"
                @blur="discordPlaceholder = ''"
                class="my-3"
                filled
              ></v-text-field>

              <!-- Flag question -->
              <p>
                If you and your teammate were in a hopeless firefight next to
                the flag, you would...
              </p>
              <v-textarea filled></v-textarea>

              <!-- Hack/cheat -->
              <p>
                Have you ever used a hack or cheat to gain an unfair advantage
                over others during online play?
              </p>

              <v-radio-group row class="my-3">
                <v-radio label="No" @change="cheatExplain = false"></v-radio>
                <v-radio label="Yes" @change="cheatExplain = true"></v-radio>
              </v-radio-group>

              <transition name="fade">
                <v-text-field
                  v-show="cheatExplain"
                  label="Please explain"
                  hint="We are an integrity-based clan."
                  class="my-3"
                  filled
                ></v-text-field>
              </transition>

              <!-- About me -->
              <p>Tell us a little bit about yourself</p>
              <v-textarea
                hint="We look for people that represent themselves well, and we would
                like to know who's going to be with us. Who are you?"
                class="my-3"
                filled
              >
              </v-textarea>
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

import { sample } from "lodash";

export default {
  components: {
    HeroImage: () => import("@/components/HeroImage")
  },

  data() {
    return {
      tagPrefix: "",
      discordPlaceholder: "",
      randomName: "",
      cheatExplain: false
    };
  },

  mounted() {
    this.randomName = this.generateRandomName();
  },

  methods: {
    generateRandomName: function() {
      return sample([
        "Donut",
        "Penguin",
        "Stumpy",
        "Whicker",
        "Shadow",
        "Howard",
        "Wilshire",
        "Darling",
        "Disco",
        "Jack",
        "The Bear",
        "Sneak",
        "Whisp",
        "Wheezy",
        "Crazy",
        "Goat",
        "Pirate",
        "Saucy",
        "Hambone",
        "Butcher",
        "Snake",
        "Caboose",
        "Sleepy",
        "Stompy",
        "Mopey",
        "Dopey",
        "Weasel",
        "Ghost",
        "Dasher",
        "Grumpy",
        "Hollywood",
        "Tooth",
        "Noodle",
        "Cupid",
        "Prancer",
        "Wallaby"
      ]);
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

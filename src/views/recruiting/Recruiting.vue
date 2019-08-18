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
                @focus="discordPlaceholder = randomDiscord"
                @blur="discordPlaceholder = ''"
                class="my-3"
                filled
              ></v-text-field>

              <!-- Timezone -->
              <v-select label="Timezone" :items="timeZones" filled></v-select>

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

import { sample, random } from "lodash";

export default {
  components: {
    HeroImage: () => import("@/components/HeroImage")
  },

  data() {
    return {
      tagPrefix: "",
      discordPlaceholder: "",
      randomName: "",
      cheatExplain: false,
      timeZones: [
        "(GMT - 12:00) International Date Line West",
        "(GMT - 11:00) Midway Island, Samoa",
        "(GMT - 10:00) Hawaii",
        "(GMT - 09:00) Alaska",
        "(GMT - 08:00) Pacific Time (US & Canada)",
        "(GMT - 08:00) Tijuana, Baja California",
        "(GMT - 07:00) Arizona",
        "(GMT - 07:00) Chihuahua, La Paz, Mazatlan",
        "(GMT - 07:00) Mountain Time (US & Canada)",
        "(GMT - 06:00) Central America",
        "(GMT - 06:00) Central Time (US & Canada)",
        "(GMT - 06:00) Guadalajara, Mexico City, Monterrey",
        "(GMT - 06:00) Saskatchewan",
        "(GMT - 05:00) Bogota, Lima, Quito, Rio Branco",
        "(GMT - 05:00) Eastern Time (US & Canada)",
        "(GMT - 05:00) Indiana (East)",
        "(GMT - 04:00) Atlantic Time (Canada)",
        "(GMT - 04:00) Caracas, La Paz",
        "(GMT - 04:00) Manaus",
        "(GMT - 04:00) Santiago",
        "(GMT - 03:30) Newfoundland",
        "(GMT - 03:00) Brasilia",
        "(GMT - 03:00) Buenos Aires, Georgetown",
        "(GMT - 03:00) Greenland",
        "(GMT - 03:00) Montevideo",
        "(GMT - 02:00) Mid-Atlantic",
        "(GMT - 01:00) Cape Verde Is.",
        "(GMT - 01:00) Azores",
        "(GMT + 00:00) Casablanca, Monrovia, Reykjavik",
        "(GMT + 00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
        "(GMT + 01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "(GMT + 01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        "(GMT + 01:00) Brussels, Copenhagen, Madrid, Paris",
        "(GMT + 01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        "(GMT + 01:00) West Central Africa",
        "(GMT + 02:00) Amman",
        "(GMT + 02:00) Athens, Bucharest, Istanbul",
        "(GMT + 02:00) Beirut",
        "(GMT + 02:00) Cairo",
        "(GMT + 02:00) Harare, Pretoria",
        "(GMT + 02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        "(GMT + 02:00) Jerusalem",
        "(GMT + 02:00) Minsk",
        "(GMT + 02:00) Windhoek",
        "(GMT + 03:00) Kuwait, Riyadh, Baghdad",
        "(GMT + 03:00) Moscow, St. Petersburg, Volgograd",
        "(GMT + 03:00) Nairobi",
        "(GMT + 03:00) Tbilisi",
        "(GMT + 03:30) Tehran",
        "(GMT + 04:00) Abu Dhabi, Muscat",
        "(GMT + 04:00) Baku",
        "(GMT + 04:00) Yerevan",
        "(GMT + 04:30) Kabul",
        "(GMT + 05:00) Yekaterinburg",
        "(GMT + 05:00) Islamabad, Karachi, Tashkent",
        "(GMT + 05:30) Sri Jayawardenapura",
        "(GMT + 05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "(GMT + 05:45) Kathmandu",
        "(GMT + 06:00) Almaty, Novosibirsk",
        "(GMT + 06:00) Astana, Dhaka",
        "(GMT + 06:30) Yangon (Rangoon)",
        "(GMT + 07:00) Bangkok, Hanoi, Jakarta",
        "(GMT + 07:00) Krasnoyarsk",
        "(GMT + 08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        "(GMT + 08:00) Kuala Lumpur, Singapore",
        "(GMT + 08:00) Irkutsk, Ulaan Bataar",
        "(GMT + 08:00) Perth",
        "(GMT + 08:00) Taipei",
        "(GMT + 09:00) Osaka, Sapporo, Tokyo",
        "(GMT + 09:00) Seoul",
        "(GMT + 09:00) Yakutsk",
        "(GMT + 09:30) Adelaide",
        "(GMT + 09:30) Darwin",
        "(GMT + 10:00) Brisbane",
        "(GMT + 10:00) Canberra, Melbourne, Sydney",
        "(GMT + 10:00) Hobart",
        "(GMT + 10:00) Guam, Port Moresby",
        "(GMT + 10:00) Vladivostok",
        "(GMT + 11:00) Magadan, Solomon Is., New Caledonia",
        "(GMT + 12:00) Auckland, Wellington",
        "(GMT + 12:00) Fiji, Kamchatka, Marshall Is.",
        "(GMT + 13:00) Nuku'alofa"
      ]
    };
  },

  mounted() {
    this.randomName = this.generateRandomName();
    this.randomDiscord = `${this.randomName}#${random(1111, 9999)}`;
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

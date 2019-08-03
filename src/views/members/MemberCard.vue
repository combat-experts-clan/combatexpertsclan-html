<script>
/**
 * MemberCard.vue
 * Child component of MemberFeed.vue which displays information about
 * a clan members.
 */
export default {
  data: function() {
    return {
      /**
       * Configure whether the timeline is visible or hidden.
       */
      timeline: false
    };
  },

  computed: {
    /**
     * Return a this.ranks array reversed without mutating the original.
     */
    ranksDescending: function() {
      return [...this.ranks].reverse();
    }
  },
  props: {
    name: String,
    rank: Object,
    tag: String,
    ranks: Array
  }
};
</script>

<template>
  <v-card>
    <v-container>
      <v-layout wrap>
        <v-flex xs4 class="ma-auto">
          <!-- User avatar -->
          <v-img
            width="100px"
            v-bind:src="
              `https://icon2.kisspng.com/20180427/pzw/kisspng-halo-the-master-chief-collection-halo-combat-evo-5ae2edca5bccf7.816730541524821450376.jpg`
            "
            style="border-radius: 50%"
            class="justify-content-center align-items-center"
          ></v-img>
        </v-flex>
        <v-flex xs8>
          <!-- User name -->
          <v-card-title class="title">{{ tag + name }}</v-card-title>

          <!-- User joined date -->
          <v-card-text class="caption pt-0">Joined: 01/01/2004 </v-card-text>

          <!-- Show actions if the rank is above member -->
          <v-card-actions v-if="rank.id < 5">
            <v-layout wrap>
              <!-- Rank history button -->

              <v-flex sm-12 md-6>
                <v-btn
                  v-if="rank.id < 5"
                  v-on:click="timeline = !timeline"
                  color="primary"
                >
                  <v-icon small>trending_up</v-icon>
                  <span>&nbsp;Rank History</span>
                </v-btn>
              </v-flex>

              <!-- Contact button -->
              <v-flex sm-12 md-6>
                <v-btn color="red darken-4">
                  <v-icon small>message</v-icon><span>&nbsp;Contact</span>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-flex>
      </v-layout>

      <!-- Ranking timeline -->
      <v-layout>
        <v-flex shrink>
          <v-expand-transition>
            <v-timeline v-show="timeline">
              <v-timeline-item v-for="n in 2" v-bind:key="n" small>
                <!-- Aside text -->
                <template v-slot:opposite>
                  <span class="display-1">July 2005</span>
                </template>

                <!-- Main text -->
                <v-card class="elevation-2 w-100">
                  <v-card-title class="title">Promotion</v-card-title>

                  <!-- Timeline item text -->
                  <v-card-text class="caption">
                    Promoted to Lieutenant
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-expand-transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

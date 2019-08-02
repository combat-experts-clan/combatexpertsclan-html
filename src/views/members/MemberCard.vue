<template>
  <v-card>
    <v-container>
      <v-layout wrap>
        <v-flex xs4 class="ma-auto">
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
          <v-card-title class="title">{{ tag + name }}</v-card-title>
          <v-card-text class="caption pt-0">Joined: 01/01/2004 </v-card-text>
          <v-card-actions v-if="rank.id < 5">
            <v-layout wrap>
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
              <v-flex sm-12 md-6>
                <v-btn color="red darken-4">
                  <v-icon small>message</v-icon><span>&nbsp;Contact</span>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex shrink>
          <v-expand-transition>
            <v-timeline v-show="timeline">
              <v-timeline-item v-for="n in 2" v-bind:key="n" small>
                <template v-slot:opposite>
                  <span class="display-1">July 2005</span>
                </template>
                <v-card class="elevation-2 w-100">
                  <v-card-title class="title">Promotion</v-card-title>
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

<script>
export default {
  data: function() {
    return {
      timeline: false
    };
  },
  computed: {
    ranksDescending: function() {
      // Reverse without mutating original array.
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

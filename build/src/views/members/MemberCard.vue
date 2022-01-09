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

  methods: {
    /**
     * Returns true if the user's rank is a leadership rank.
     */
    isLeader: function(id) {
      return [1, 2].includes(id);
    },

    /**
     * Returns true if the user's rank is a standard rank.
     */
    isMember: function(id) {
      return [3, 4, 5].includes(id);
    },

    /**
     * Returns true if the user's rank is a recruit rank.
     */
    isRecruit: function(id) {
      return id === 6;
    },

    /**
     * Returns a string containing the clan tag for a member, given an integer.
     */
    getClanTag: function(id) {
      if (this.isLeader(id)) {
        return "«CE»";
      } else if (this.isRecruit(id)) {
        return "-CE-";
      } else {
        return "=CE=";
      }
    }
  },

  computed: {
    /**
     * Return a this.ranks array reversed without mutating the original.
     */
    rankHistoryReversed: function() {
      return [...this.rankHistory].reverse();
    },

    /**
     * Returns the user's clan tag.
     */
    clanTag: function() {
      return this.getClanTag(this.rank.id);
    },

    /**
     * Returns the user's name.
     */
    memberName: function() {
      return this.member.name;
    },

    /**
     * Returns the name of the user's rank.
     */
    rankName: function() {
      return this.rank.name;
    }
  },

  props: {
    member: Object,
    rank: Object,
    rankHistory: Array
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
            v-bind:src="require('@/assets/chief-helmet.jpg')"
            class="justify-content-center align-items-center avatar"
            width="100%"
            height="100%"
          ></v-img>
        </v-flex>
        <v-flex xs8>
          <!-- User name -->
          <v-card-title class="title pb-0">
            {{ clanTag + memberName }}
          </v-card-title>

          <!-- User joined date -->
          <v-card-text class="caption">{{ rankName }} </v-card-text>

          <!-- Timeline action buttons, applied on users which have ranking history -->
          <v-card-actions v-if="!isRecruit(rank.id)">
            <v-layout wrap>
              <v-flex sm-12 md-6>
                <v-btn v-on:click="timeline = !timeline" color="primary">
                  <v-icon small>trending_up</v-icon>
                  <span>&nbsp;Rank History</span>
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

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}
</style>

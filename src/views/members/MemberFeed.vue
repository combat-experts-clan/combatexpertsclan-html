<script>
/**
 * MembersFeed.vue
 * Child component of Members.vue to display cards of available users.
 */
import { sortBy } from "lodash";

export default {
  components: {
    MemberCard: () => import("@/views/members/MemberCard")
  },

  methods: {
    /**
     * Get all members that match a given rank.
     */
    getMembersByRank: function(rank) {
      return this.members.filter(member => member.rank === rank);
    },

    /**
     * Generate the clan tag of a member of a given rank.
     */
    getClanTag: function(member) {
      return [1, 2].includes(member.rank)
        ? "«CE»"
        : member.rank === 6
        ? "-CE-"
        : "=CE=";
    },

    /**
     * Return an alphabetically sorted list of all members.
     */
    sortMembersAlphabetically: function(membersObject) {
      return sortBy(membersObject, ["name"]);
    }
  },

  data: function() {
    return {
      /**
       * Configure available ranks.
       */
      ranks: [
        { id: 1, name: "Boss" },
        { id: 2, name: "Leader" },
        { id: 3, name: "Administrator" },
        { id: 4, name: "Moderator" },
        { id: 5, name: "Member" },
        { id: 6, name: "Recruit" }
      ],

      /**
       * Configure the clan members.
       * PLACEHOLDER DATA
       */
      members: [
        { id: 1, name: "Addict", rank: 1 },
        { id: 2, name: "Chance", rank: 2 },
        { id: 3, name: "Toxic", rank: 3 },
        { id: 4, name: "Ferno", rank: 4 },
        { id: 5, name: "Kradon", rank: 5 },
        { id: 6, name: "Wallaby", rank: 6 }
      ]
    };
  },

  computed: {
    /**
     * Returns which ranks have at least one associated members.
     */
    ranksNotEmpty: function() {
      let vm = this;
      return vm.ranks.filter(rank =>
        vm.members.some(member => member.rank === rank.id)
      );
    },

    /**
     * Determine the correct class to apply according to the viewport size.
     */
    seperatorTextClass: function() {
      return {
        "display-2": this.$vuetify.breakpoint.lgAndUp,
        "display-1": this.$vuetify.breakpoint.mdAndDown
      };
    }
  }
};
</script>

<template>
  <v-container grid-list-lg id="member-feed">
    <!-- Iterate over ranks which have at least one members. -->
    <template v-for="rank in ranksNotEmpty">
      <v-layout pb-2 wrap v-bind:key="`${rank.name}Header`">
        <v-flex md12>
          <h1 :class="seperatorTextClass">{{ rank.name }}</h1>
        </v-flex>
      </v-layout>
      <v-layout mb-6 wrap v-bind:key="`${rank.name}Members`">
        <!-- Order the members alphabetically. -->
        <v-flex
          v-for="member in sortMembersAlphabetically(getMembersByRank(rank.id))"
          v-bind:key="member.id"
          v-bind:md6="member.rank < 5"
          md4
          sm12
        >
          <member-card
            class="member-card"
            v-bind="member"
            v-bind:tag="getClanTag(member)"
            v-bind:rank="rank"
          ></member-card>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<style lang="scss" scoped>
#member-feed {
  margin-top: 5rem;
}
.member-card {
  margin: 0 0.5rem;
}
</style>

<script>
/**
 * MembersFeed.vue
 * Child component of Members.vue to display cards of available users.
 */
import { sortBy } from "lodash";

export default {
  components: {
    TileView: () => import("./TileView"),
    ListView: () => import("./ListView")
  },

  methods: {
    /**
     * Get all members that match a given rank, sorted alphabetically.
     */
    getMembersByRank: function(rankIndex) {
      return sortBy(this.members.filter(member => member.rank === rankIndex), [
        "name"
      ]);
    }
  },

  data: function() {
    return {
      /**
       * Placeholder ranks.
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
       * Placeholder clan members.
       */
      members: [
        { id: 1, name: "Addict", rank: 1 },
        { id: 2, name: "Chance", rank: 2 },
        { id: 3, name: "Toxic", rank: 3 },
        { id: 4, name: "Ferno", rank: 4 },
        { id: 5, name: "Kradon", rank: 5 },
        { id: 6, name: "Wallaby", rank: 6 }
      ],

      /**
       * Configure the member feed type.
       */
      viewType: "tile"
    };
  },

  computed: {
    /**
     * Return ranks that have at least one member.
     */
    ranksContainingMembers: function() {
      let _this = this;
      return _this.ranks.filter(rank =>
        _this.members.some(member => member.rank === rank.id)
      );
    }
  }
};
</script>

<template>
  <div id="member-feed">
    <!-- Change member view to list or tiles -->
    <v-container>
      <v-layout wrap justify-end>
        <v-icon @click="viewType = 'tile'">apps</v-icon>
        <!-- <v-icon @click="viewType = 'list'">view_list</v-icon> -->
      </v-layout>
    </v-container>

    <!-- Members feed -->
    <v-container grid-list-lg>
      <v-layout v-for="rank in ranksContainingMembers" :key="rank.id">
        <!-- View as tile -->
        <tile-view
          v-bind:members="getMembersByRank(rank.id)"
          v-bind:rank="rank"
          v-show="viewType === 'tile'"
        ></tile-view>
      </v-layout>

      <!-- View as list -->
      <list-view
        v-bind:members="members"
        v-bind:ranks="ranks"
        v-show="viewType === 'list'"
      ></list-view>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
#member-feed {
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.068),
      rgba(31, 4, 24, 0.73)
    ),
    url("../../assets/textures/dark-honeycomb.png");
  background-repeat: repeat;
}
</style>

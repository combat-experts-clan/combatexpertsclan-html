<template>
  <v-layout wrap>
    <v-flex v-bind:key="member.id" v-for="member in members" md4 mb-5>
      <member-card
        class="member-card"
        v-bind:member="member"
        v-bind:rank="rank"
      ></member-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "TileView",
  props: {
    members: Array,
    rank: Object
  },
  components: {
    MemberCard: () => import("./MemberCard")
  }
};
</script>

<style lang="scss" scoped>
.member-card {
  margin: 0 0.5rem;
}
</style>

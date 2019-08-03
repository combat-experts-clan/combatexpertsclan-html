<script>
/**
 * Members.vue
 * Parent component for the members page.
 */
export default {
  components: {
    MemberFeed: () => import("@/views/members/MemberFeed")
  }
};
</script>

<template>
  <member-feed></member-feed>
</template>

<style lang="scss" scoped>
#members {
  margin-top: 5rem;
}
</style>

<template>
  <member-feed></member-feed>
</template>

<script>
export default {
  components: {
    MemberFeed: () => import("@/views/members/MemberFeed")
  }
};
</script>

<style lang="scss" scoped>
#members {
  margin-top: 5rem;
}
</style>

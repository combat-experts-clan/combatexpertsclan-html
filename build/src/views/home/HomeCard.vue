<template>
  <v-layout wrap>
    <v-flex md-4 v-if="this.$attrs.id % 2 === 0">
      <v-img class="img-round" v-bind:src="image"></v-img>
    </v-flex>
    <v-flex md-8>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ text }}</v-card-text>
    </v-flex>
    <v-flex md-4 v-if="this.$attrs.id % 2 === 1">
      <v-img class="img-round" v-bind:src="image"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    image: String
  }
};
</script>

<style lang="scss" scoped>
.img-round {
  border-radius: 50%;
}
</style>

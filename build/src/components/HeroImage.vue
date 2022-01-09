<template>
  <v-layout>
    <v-flex>
      <v-parallax :src="image" :height="height">
        <slot></slot>
      </v-parallax>
    </v-flex>
  </v-layout>
</template>

<script>
/**
 * HeroImage.vue
 * A reusable component that can be used as a hero image or call-to-arms.
 */
export default {
  props: {
    text: String,
    image: String,
    height: Number
  }
};
</script>

<script>
/**
 * HeroImage.vue
 * Reusable "hero image"-type component to display a prominent message
 * over a background image.
 */
export default {
  props: { text: String, image: String, height: Number },
  computed: {
    /**
     * Determine the correct class to apply according to the viewport size.
     */
    classes: function() {
      return {
        "display-3": this.$vuetify.breakpoint.lgAndUp,
        "display-2": this.$vuetify.breakpoint.mdOnly,
        "display-1": this.$vuetify.breakpoint.smAndDown
      };
    }
  }
};
</script>

<template>
  <v-layout>
    <v-flex>
      <!-- Parallax wrapper element. -->
      <v-parallax v-bind:src="image" height="500">
        <v-layout align-center justify-center column>
          <!-- Hero image text. -->
          <h1
            class="hero-text text-uppercase text--light text-center mx-auto"
            :class="classes"
          >
            <slot />
          </h1>
        </v-layout>
      </v-parallax>
    </v-flex>
  </v-layout>
</template>

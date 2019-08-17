<script>
/**
 * Toolbar.vue
 * The primary site navigation component.
 */
export default {
  name: "BaseToolbar",
  data() {
    return {
      /**
       * Configure the application logo.
       */
      logo: require("@/assets/logos/logo_01.png"),

      /**
       * Configure the items available in the toolbar.
       */
      toolbarItems: [
        { title: "Home", destination: "/home" },
        { title: "Recruiting", destination: "/recruiting" },
        { title: "Charter", destination: "/charter" },
        { title: "Members", destination: "/members" }
      ],

      /**
       * Value to detemine whether the drawer is visible or hidden.
       */
      drawer: false,

      /**
       * Configure the items available in the navigation drawer.
       */
      drawerItems: [
        {
          title: "Home",
          icon: "dashboard",
          destination: "/home"
        },
        {
          title: "Recruiting",
          icon: "question_answer",
          destination: "/recruiting"
        },

        {
          title: "Charter",
          icon: "question_answer",
          destination: "/charter"
        },
        {
          title: "Members",
          icon: "question_answer",
          destination: "/members"
        }
      ]
    };
  }
};
</script>

<template>
  <v-layout>
    <!-- Toolbar wrapper element. -->
    <v-app-bar color="dark" flat>
      <!-- Configure the background image shown in the toolbar. -->
      <template v-slot:img="{ props }">
        <v-img v-bind="props" position="center top"></v-img>
      </template>

      <!-- "Hamburger menu" targeted for mobile users.  Displays the drawer when used. -->
      <v-app-bar-nav-icon
        class="align-self-center"
        v-show="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <!-- Configure the application title. -->
      <v-toolbar-title class="align-self-center">
        <v-img
          :src="require('@/assets/logos/icon.png')"
          width="75px"
          height="75px"
        ></v-img>
      </v-toolbar-title>

      <!-- Right side elements. -->
      <v-spacer></v-spacer>

      <!-- Configure the toolbar navigation links. -->
      <v-toolbar-items
        v-show="$vuetify.breakpoint.mdAndUp"
        class="align-center"
      >
        <v-btn
          class="toolbar-button"
          v-for="item in toolbarItems"
          :key="item.title"
          :to="item.destination"
          text
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Show the name of the page that the user is currently on. -->
      <h3 v-show="$vuetify.breakpoint.smAndDown">Home</h3>
    </v-app-bar>

    <!-- Navigation drawer wrapper element. -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <!-- Configure the user's avatar. -->
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <!-- Configure the user's display name. -->
        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Configure the drawer navigation links. -->
      <v-list dense>
        <v-list-item
          v-for="item in drawerItems"
          :key="item.title"
          :to="item.destination"
          link
        >
          <!-- List item icon. -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <!-- List item text. -->
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style lang="scss" scoped>
.toolbar-button {
  max-height: 3rem;
}
</style>

<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex
        v-for="(card, index) in cards"
        v-bind:key="card.title"
        v-bind:class="flexSize(index)"
      >
        <v-card
          v-bind:key="card.title"
          v-bind:img="card.image"
          min-height="15rem"
          href="#"
        >
          <v-card-title>
            <h1 class="display-2">{{ card.title }}</h1>
          </v-card-title>
          <v-card-text>
            <p class="subtitle-1">{{ card.text }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CardFeed",
  methods: {
    flexSize: function(index) {
      return {
        md6: Math.floor(index % 5) === 0 || Math.floor(index % 5) === 1,
        md4:
          Math.floor(index % 5) === 2 ||
          Math.floor(index % 5) === 3 ||
          Math.floor(index % 5) === 4
      };
    }
  },

  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Join Now",
          text: "Apply now to be among the most deadly of combat experts.",
          image: "https://i.ytimg.com/vi/g3zXyuFQ-oc/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "Game Night",
          text: "Capture the Flag, every Friday night at 8:00 PM EST.",
          image:
            "https://3.bp.blogspot.com/-cR_4U4RLuGU/UEsQkziAjdI/AAAAAAAAI64/PKIdsz4iKno/s1600/halo4-ctf-pistol-flag.jpg"
        },
        {
          id: 3,
          title: "md4",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          image: ""
        },
        {
          id: 4,
          title: "md4",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          image: ""
        },
        {
          id: 5,
          title: "md4",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          image: ""
        }
      ]
    };
  }
};
</script>

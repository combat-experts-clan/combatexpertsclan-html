<script>
export default {
  name: "ListView",
  props: {
    members: Array,
    ranks: Array
  },
  data: function() {
    return {
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: true,
          value: "name"
        },
        {
          text: "Rank",
          value: "rank"
        }
      ]
    };
  }
};
</script>

<template>
  <v-layout wrap>
    <v-data-table :headers="headers" :items="items" :items-per-page="25">
    </v-data-table>
  </v-layout>
</template>

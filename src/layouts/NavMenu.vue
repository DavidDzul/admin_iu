<template>
  <v-list style="padding-top: 1px">
    <template v-for="(item, i) in links" :key="i">
      <v-list-item :to="item.link" :title="item.text" :prepend-icon="item.icon" :exact="true"> </v-list-item>
    </template>
  </v-list>
</template>

<script setup lang="ts">
import { ref } from "vue"
const links = ref([
  {
    text: "Inicio",
    icon: "mdi-home",
    link: "/",
  },
])
</script>

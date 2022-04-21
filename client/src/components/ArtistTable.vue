<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/counter";
export default {
  props: ["title"],
  methods: {
    ...mapActions(useGlobalStore, ["searchByTitle"]),
    lyrics(song) {
      const artist = localStorage.getItem("artist");
      localStorage.setItem("song", song);
      this.searchByTitle(artist, song);
      this.$router.push(`/lyrics/${artist}/${song}`);
    },
  },
};
</script>

<template>
  <!-- Artist Table -->
  <li class="list-group-item">
    <a
      href=""
      class="navbar-brand text-dark"
      v-on:click.prevent="lyrics(this.title.songName)"
    >
      {{ this.title.songName }}</a
    >
  </li>
</template>

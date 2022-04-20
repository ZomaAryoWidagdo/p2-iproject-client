<script>
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/counter";
export default {
  data() {
    return {
      name: "",
      title: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["searchByTitle"]),
  },
  computed: {
    ...mapState(useGlobalStore, ["lyrics"]),
  },
  created() {
    const currentArtist = localStorage.getItem("artist");
    const currentSong = localStorage.getItem("song");
    this.name = currentArtist.toUpperCase();
    this.title = currentSong.toUpperCase();
    this.searchByTitle(currentArtist, currentSong);
  },
};
</script>

<template>
  <!-- Lyrics Page -->
  <h1 style="display: flex; flex-direction: column; align-items: center">
    {{ this.name }}-{{ this.title }}
  </h1>
  <ul class="list-group list-group-flush">
    <div
      class="container"
      style="align-items: center; width: 300px; justify-content: center"
    >
      {{ this.lyrics.songLyric }}
    </div>
  </ul>
</template>

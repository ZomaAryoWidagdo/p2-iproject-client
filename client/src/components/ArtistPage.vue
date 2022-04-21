<script>
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/counter";
import ArtistTable from "./ArtistTable.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: { ArtistTable },
  methods: { ...mapActions(useGlobalStore, ["searchByArtist", "makeFalse"]) },
  computed: {
    ...mapState(useGlobalStore, ["artist"]),
  },
  created() {
    let currentArtist = "";

    localStorage.removeItem("song");
    this.makeFalse();
    setTimeout(() => {
      currentArtist = localStorage.getItem("artist");
      this.name = currentArtist.toUpperCase();
    }, 500);
    setTimeout(() => {
      this.searchByArtist(currentArtist);
    }, 1000);
  },
};
</script>

<template>
  <!-- Artist Page -->
  <h1 style="display: flex; flex-direction: column; align-items: center">
    {{ this.name }}
  </h1>
  <ul class="list-group list-group-flush" style="align-items: center">
    <ArtistTable
      v-for="x in artist.data"
      :key="x.songName"
      :title="x"
    ></ArtistTable>
  </ul>
</template>

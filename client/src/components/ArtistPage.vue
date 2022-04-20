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
  methods: { ...mapActions(useGlobalStore, ["searchByArtist"]) },
  computed: {
    ...mapState(useGlobalStore, ["artist"]),
  },
  created() {
    localStorage.removeItem("song");
    const currentArtist = localStorage.getItem("artist");
    this.searchByArtist(currentArtist);
    this.name = currentArtist.toUpperCase();
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

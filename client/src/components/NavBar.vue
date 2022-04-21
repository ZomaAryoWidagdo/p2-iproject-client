<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/counter";

export default {
  data() {
    return {
      // artist: false,
      name: "",
      title: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["thisFalse"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["searchByArtist", "searchByTitle"]),
    searchName() {
      // this.artist = true;
      this.searchByArtist(this.name);
      this.$router.push(`/artist/${this.name}`);
      localStorage.setItem("artist", this.name);
      localStorage.removeItem("song");
    },
    searchTitle() {
      const artist = localStorage.getItem("artist");
      this.searchByTitle(this.title, artist);
      this.artist = false;
      this.$router.push(`/lyrics/${artist}/${this.title}`);
    },
    home() {
      localStorage.clear();
      this.$router.push(`/`);
    },
  },
  created() {
    this.artist = false;
    this.artist = this.thisFalse;
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-light shadow sticky-top p-4 d-flex justify-content-end"
    style="height: 50px"
  >
    <div class="container-fluid">
      <div>
        <a class="navbar-brand text-dark" href="#" @click.prevent="home">
          <i class="fa fa-music"></i> iChill
        </a>
      </div>

      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="input-group mb-3" style="margin-top: 10px">
            <!-- <form action="" v-on:submit.prevent="searchName"> -->
            <input
              type="text"
              class="form-control"
              placeholder="Search your artist"
              aria-describedby="button-addon2"
              v-model="this.name"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              v-on:click.prevent="searchName"
            >
              Button
            </button>
            <!-- </form> -->
          </div>
          <div class="input-group mb-3" v-if="artist" style="margin-top: 10px">
            <!-- <form action="" v-on:submit.prevent="searchTitle"> -->
            <input
              type="text"
              class="form-control"
              placeholder="Search this artist Title"
              aria-describedby="button-addon2"
              v-model="this.title"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              v-on:click.prevent="searchTitle"
            >
              Button
            </button>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

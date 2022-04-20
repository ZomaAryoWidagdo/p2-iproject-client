<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/counter";
export default {
  data() {
    return {
      artist: false,
      name: "",
      title: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["searchByArtist", "searchByTitle"]),
    searchName() {
      this.searchByArtist(this.name);
      this.artist = true;
      localStorage.setItem("artist", this.name);
      this.$router.push(`/artist/${this.name}`);
    },
    searchTitle() {
      this.searchByTitle(this.title);
      this.artist = false;
      this.$router.push(`/lyrics/${this.title}`);
    },
    home() {
      localStorage.clear();
      this.$router.push(`/`);
    },
  },
  created() {
    this.artist = false;
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-light shadow sticky-top p-4 d-flex justify-content-end"
  >
    <div class="container-fluid">
      <div>
        <a class="navbar-brand text-dark" href="#" @click.prevent="home">
          <i class="fa fa-music"></i> iChill
        </a>
      </div>
      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="input-group mb-3" v-if="!artist">
            <form action="" v-on:submit.prevent="searchName">
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
            </form>
          </div>
          <div class="input-group mb-3" v-if="artist">
            <form action="" v-on:submit.prevent="searchTitle">
              <input
                type="text"
                class="form-control"
                placeholder="Search by Title"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

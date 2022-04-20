import { defineStore } from "pinia";
import axios from "axios";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    charts: [],
    artist: [],
    lyrics: [],
  }),
  getters: {},
  actions: {
    async chart() {
      try {
        const { data } = await axios.get("http://localhost:3001/Chart");

        this.charts = data;
      } catch (error) {
        console.log(error);
      }
    },

    async searchByArtist(artist) {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/Song/${artist}`
        );

        this.artist = data;
      } catch (error) {
        console.log(error);
      }
    },

    async searchByTitle(artist, title) {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/Song/${artist}/${title}`
        );

        this.lyrics = data.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
});

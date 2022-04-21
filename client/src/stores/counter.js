import { defineStore } from "pinia";
import axios from "axios";
// const url = "http://localhost:3001/"
const url = "https://ichill.herokuapp.com/";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    charts: [],
    artist: [],
    lyrics: [],
    donateInfo: [],
    thisFalse: true,
  }),
  getters: {},
  actions: {
    async chart() {
      try {
        const { data } = await axios.get(`${url}Chart`);

        this.charts = data;
      } catch (error) {
        console.log(error);
      }
    },

    async searchByArtist(artist) {
      try {
        const { data } = await axios.get(`${url}Song/${artist}`);

        this.artist = data;
      } catch (error) {
        console.log(error);
      }
    },

    async searchByTitle(title, artist) {
      try {
        const { data } = await axios.get(`${url}Song/${artist}/${title}`);

        this.lyrics = data.data[0];
      } catch (error) {
        console.log(error);
      }
    },

    makeFalse() {
      this.thisFalse = false;
    },
  },
});

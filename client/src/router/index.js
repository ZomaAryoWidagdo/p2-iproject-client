import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ArtistPage from "@/components/ArtistPage.vue";
import LyricsPage from "@/components/LyricsPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/artist/:artist",
      name: "artist",
      component: ArtistPage,
    },
    {
      path: "/lyrics/:artist/:title",
      name: "lyrics",
      component: LyricsPage,
    },
  ],
});

export default router;

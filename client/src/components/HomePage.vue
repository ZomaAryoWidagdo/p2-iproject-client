<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/counter";
import ChartTable from "./ChartTable.vue";
export default {
  components: { ChartTable },
  methods: { ...mapActions(useGlobalStore, ["chart"]) },
  computed: {
    ...mapState(useGlobalStore, ["charts"]),
  },
  created() {
    this.chart();
    localStorage.clear();
  },
};
</script>

<template>
  <!-- Home -->
  <div class="row m-2 my-5" id="home-page">
    <div class="row d-flex justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Rank</th>
            <th scope="col">Last Week</th>
            <th scope="col">Artist</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <ChartTable
            v-for="x in this.charts.data"
            :key="x.rank"
            :chart="x"
          ></ChartTable>
        </tbody>
      </table>
    </div>
  </div>
</template>

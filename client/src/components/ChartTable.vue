<script>
export default {
  data() {
    return {
      name: "",
      title: "",
    };
  },
  props: ["chart"],

  created() {
    this.name = this.chart.artist.replace("amp;", "");
    this.title = this.chart.title.replace("&#039;t", "");
  },
};
</script>

<template>
  <!-- Chart Table -->

  <tr>
    <th scope="row">
      <img :src="chart.image" style="width: 50px; height: 50px" />
    </th>
    <td>{{ chart.rank }}</td>
    <td>{{ chart.last_week }}</td>
    <td>{{ this.name }}</td>
    <td>{{ this.title }}</td>
  </tr>
</template>

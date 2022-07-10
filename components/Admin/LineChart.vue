<template>
  <div class="box">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import util from "../../assets/js/util";

export default {
  name: "planetchart",
  data() {
    return {
      planetChartData: util.initiateBarChart(),
    };
  },
  mounted() {
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  width: 500px;
  /* box-shadow: 0 0 1px 16px white; */
  box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
  padding: 1.2rem;
}
</style>

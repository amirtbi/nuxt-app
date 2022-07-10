<template>
  <div class="box">
    <canvas id="pie-chart" ref="pie-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import util from "../../assets/js/util";
export default {
  data() {
    return {
      chartData: util.initiatePieChart(),
    };
  },
  mounted() {
    const ctx = document.getElementById("pie-chart");
    new Chart(ctx, this.chartData);
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  width: 300px;
  max-width: 300px;
  max-height: 500px;
  /* box-shadow: 0 0 1px 16px white; */
  box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
  padding: 1.2rem;
}
</style>

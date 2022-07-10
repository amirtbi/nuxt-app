<template>
  <div class="box">
    <!-- <div class="text-container">
      <span>90%</span>
    </div> -->
    <canvas id="doughnut-chart" ref="doughnut-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import util from "../../assets/js/util";

export default {
  data() {
    return {
      chartData: util.initiatedoughnutChart(),
    };
  },
  mounted() {
    console.log(this.chartData);
    const ctx = document.getElementById("doughnut-chart");
    new Chart(this.$refs["doughnut-chart"], this.chartData);
  },
};
</script>

<style scoped>
.box {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 300px;
  /* box-shadow: 0 0 1px 16px white; */
  box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
  padding: 1.2rem;
  max-width: 300px;
  max-height: 500px;
}
.text-container {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 43%;
  font-size: 2.2rem;
  font-weight: bold;
}
</style>

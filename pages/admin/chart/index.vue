<template>
  <section class="charts">
    <div class="container">
      <PlanetChart />
      <PieChart />
      <DoughnutChart />
    </div>
  </section>
</template>

<script>
import PlanetChart from "../../../components/Admin/LineChart.vue";
import PieChart from "../../../components/Admin/PieChart.vue";
import DoughnutChart from "../../../components/Admin/DoughnutChart.vue";

export default {
  components: {
    PlanetChart,
    PieChart,
    DoughnutChart,
  },
  data() {},
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

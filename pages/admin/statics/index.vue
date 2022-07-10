<template>
  <div id="app">
    <div>
      <button @click="shuffleData">Shuffle</button>
      <button @click="zoom">Zoom</button>
    </div>
    <BarChart v-bind="barChartProps" />
    <img style="width: 300px" v-if="imgData" :src="imgData" />
  </div>
</template>

<script>
import { BarChart, useBarChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "@vue/composition-api";
import { shuffle } from "lodash";

export default defineComponent({
  name: "App",
  components: {
    BarChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const legendTop = ref(true);
    const imgData = ref(null);
    console.log("hi");
    const options = computed(() => ({
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }));

    const chartData = computed(() => ({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "black",
          ],
          borderWidth: 3,
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
      options,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value;
      imgData.value = barChartRef.value.chartInstance.toBase64Image();
      barChartRef.value.chartInstance.resetZoom();
    }

    function zoom() {
      barChartRef.value.chartInstance.zoom(1.01);
    }

    return { shuffleData, barChartProps, barChartRef, imgData, zoom };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

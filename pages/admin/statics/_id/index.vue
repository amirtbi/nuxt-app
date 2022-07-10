<template>
  <DoughnutChart :chartData="testData" :options="options" />
</template>

<script>
import { DoughnutChart } from "vue-chart-3";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Home",
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ["پاریس", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
          cutout: "90%",
        },
      ],
    };
    const options = {
      legend: {
        display: false,
      },
    };

    return { testData, options };
  },
});
</script>

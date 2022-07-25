<template>
  <v-card>
    <div id="charts">
      <div id="chart1">
        <apexchart
          type="donut"
          height="230"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "BrushCharts",
  data: function () {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: "donut",
        },
        fill: {
          type: "gradient",
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: "top",
          horizontalAlign: "top",
          floating: false,
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          fontWeight: 400,
          formatter: undefined,
          inverseOrder: false,
          width: undefined,
          height: undefined,
          tooltipHoverFormatter: undefined,
          customLegendItems: [],
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: undefined,
            useSeriesColors: false,
          },
          markers: {
            width: 20,
            height: 20,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
          },
          itemMargin: {
            horizontal: 5,
            vertical: 0,
          },
          onItemClick: {
            toggleDataSeries: true,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "top",
              },
            },
          },
        ],
      },
    };
  },

  methods: {},
};
</script>

<style scoped>
#chart1,
#chart2 {
  max-width: 650px;
  margin: 35px auto;
}

#chart2 {
  position: relative;
  margin-top: -70px;
  margin-bottom: 0px;
}

#app {
  padding-top: 20px;
  padding-left: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 22px 35px -16px rgba(0, 0, 0, 0.1);
  max-width: 650px;
  margin: 35px auto;
}
</style>

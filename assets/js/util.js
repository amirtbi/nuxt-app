import { chart } from "chart.js";
const dataPoints = [55, 10];
const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "Populations",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267, 734, 784, 433],
      cutout: "90%",
      borderRadius: 10,
    },
  ],
};
const counter = {
  id: "counter",
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
    } = chart;
    ctx.save();
    // ctx.fillStyle = "blue";
    // ctx.fillRect(width / 2, top + height / 2, 10, 10);
    ctx.font = "60px san-serif";
    ctx.textAlign = "center";
    ctx.fillText(dataPoints[0] + "%", width / 2, top + height / 2);
  },
};
const config = {
  type: "doughnut",
  data: data,
  options: {},
};

const util = {
  initiateBarChart() {
    return {
      type: "line",
      data: {
        labels: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
        ],
        datasets: [
          {
            label: "Number of Moons",
            data: [0, 0, 1, 2, 79, 82, 27, 14],
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
          },
          {
            label: "Planetary Mass (relative to the Sun x 10^-6)",
            data: [
              0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514,
            ],
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        lineTension: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                padding: 25,
              },
            },
          ],
        },
      },
    };
  },
  initiatePieChart() {
    return {
      type: "pie",
      data: {
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "Populations(million)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
      },
    };
  },

  initiatedoughnutChart() {
    return {
      type: "doughnut",
      data: {
        labels: ["Africa", "Asia"],
        datasets: [
          {
            label: "Populations",
            backgroundColor: ["#3e95cd", "blue"],
            data: dataPoints,
            cutout: "90%",
            borderRadius: 5,
            circumference: 180,
            rotation: 270,
          },
        ],
      },
      plugins: [counter],
    };
  },
};

export default util;

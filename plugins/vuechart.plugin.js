import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(...registerables, zoomPlugin);
Chart.defaults.font.size = 14;
Chart.defaults.font.family = "Roboto";

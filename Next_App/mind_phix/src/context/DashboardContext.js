const xValues = ["Active", "New", "Inactive"];
const yValues = [74, 18, 8];
const barColors = ["#B09FFF", "#FFD572"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: {
      display: false, // Set to false to hide labels
    },
  },
});
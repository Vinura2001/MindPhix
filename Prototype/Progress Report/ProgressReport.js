//Line chart
// Face images
const happyFace = null;
const smileFace = null;
const neutralFace = null;
const injuredFace = null;
const scepticFace = null;
const sadFace = null;

// Line Graph
const xValues = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8"];
const yValues = [1,2,3,2,5,6,5,6];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          min: 1,
          max: 6,
          stepSize: 1, // Optional: Set the step size for the ticks
          callback: function(value, index, values) {
            // Replace numerical values with corresponding face images
            switch (value) {
              case 1: return happyFace;
              case 2: return smileFace;
              case 3: return neutralFace;
              case 4: return injuredFace;
              case 5: return scepticFace;
              case 6: return sadFace;
              default: return value;
            }
          }
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Weeks'
        }
      }]
    }
  }
});








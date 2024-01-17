
//Rounded line grapg
const xValues1 = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7"];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{ 
      data: [27,18,13,16,8,3,0],
      borderColor: "blue",
      fill: true
    }]
  },

  
  options: {
    legend: {display: false}
  }
});

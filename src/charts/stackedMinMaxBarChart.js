import React, { Component } from "react";
import Chart from "chart.js";
import fetchData from "./../common/fetchData";

class StackedMinMaxBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  async arrangeData() {

    let subDistrict = [];
    let minMaxCounter = [];
    let data = await fetchData(this.props);
    //console.log(data.keys);
    

    data.forEach(element => {
        subDistrict.push(element["Sub-district"]);
    });

    //Find total minimum and maximum counts for each sub district

    console.log(subDistrict);

    subDistrict = [...new Set(subDistrict)];
    console.log(subDistrict);

    minMaxCounter = Array(2).fill().map(() => Array(subDistrict.length).fill(0));
    let sum = 0;

    console.log(minMaxCounter);

    data.forEach((element) => {
      for(let i = 0; i < subDistrict.length; i++)
      {
        if (subDistrict[i] == element["Sub-district"])
        {
          if (element["Performance"] == "Maximum")
          {
            minMaxCounter[0][i] += parseInt(element["Value Reported"], 10);
            sum += parseInt(element["Value Reported"], 10);
            console.log(element["Value Reported"]);
          }
          else if (element["Performance"] == "Minimum")
          {
            minMaxCounter[1][i] += parseInt(element["Value Reported"], 10);
          }
        }
      }
    });
     this.loadChart(subDistrict, minMaxCounter);
    
  }
  componentDidUpdate() {
    this.arrangeData();
  }
loadChart(labels, data) {
  var options = {
    layout: {
      padding: {
        top: 5,
      },
    },
    scales: {
      yAxes: [
        {
          display: true,
          barPercentage: 0.4,
          ticks: {
            fontSize: 12,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            callback: function (t, i) {
              return t < 0 ? Math.abs(t) : t;
            },
          },
        },
      ],
    },
    responsive: true,
    //maintainAspectRatio: false,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  for (let i = 0; i < data[0].length; i++) {
    data[0][i] = -Math.abs(data[0][i]);
}
  this.chart = new Chart(this.stackedChart, {
    type: "horizontalBar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Minimum performing facilities",
          data: data[0],
          backgroundColor: "#2196F3",
          hoverBackgroundColor: "#2196F3",
        },
        {
          label: "Maximum performing facilities",
          data: data[1],
          backgroundColor: "#E91E63",
          hoverBackgroundColor: "#E91E63",
        },
      ],
    },
    options:{
    title: {
      text: 'Number of facilities per indicator',
      display: true,
      fontSize: 16,
      position: 'top',
  },
  maintainAspectRatio: true,
  responsive: true
  },
  });

}

  componentDidMount() {
    //age group gets location
    //male data total mx
    //female data total min
    this.arrangeData();
   }

  render() {
    return (
      <canvas
        className="chart-canvas-common"
        ref={(r) => {
          this.stackedChart = r;
        }}
      />
    );
  }
}
export default StackedMinMaxBarChart;

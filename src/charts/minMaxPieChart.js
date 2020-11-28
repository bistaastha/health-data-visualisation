import React, { Component } from "react";
import Chart from "chart.js";
import Papa from "papaparse";
import {csv} from "d3-fetch";
import { data } from "jquery";

class MinMaxPieChart extends Component {

  componentDidMount() {

    csv(`/data/${this.props.cityName}_${this.props.monthName}_15_16.csv`).then(function(data) {
      
        var data = data[0];
      });
    console.log("In function");
    this.chart = new Chart(this.pieChart, {
      type: "pie",
      data: {
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
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },

      options: {
        title: {
          text: "Pie Chart",
          display: true,
          fontSize: 16,
          position: "top",
        },
        maintainAspectRatio: true,
        responsive: true,
      },
    });
  }

  render() {
    return (
      <canvas
        className="chart-canvas-common pie-chart"
        ref={(r) => {
          this.pieChart = r;
        }}
      />
    );
  }
}
export default MinMaxPieChart;

import React, { Component } from 'react';
import Chart from 'chart.js';
import './chart-styles.css';
import {csv} from "d3-fetch";


class MinMaxBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
      }


    componentDidMount() {
    let totalFacilityCount = [];
    let nilFacilityCount = [];
    let indicatorDistinct = [];
    csv(`/data/${this.state.cityName}_${this.state.monthName}_15_16.csv`).then(function(data) {
        let indicatorsAll = data.map((element) => element["Indicator"]);
        let totalFacilities = data.map((element) => +element["Total No. of Facilities #"]);
        let totalNilFacilities =  data.map((element) => +element["Facilities reporting nil performance - Numbers*"]);
        let current = "";
        for(let i = 0, c = 0; i < indicatorsAll.length; i++)
        {
            if(indicatorsAll[i] != current)
            {
                if (!(current == ""))
                {
                    c++;
                }
                indicatorDistinct.push(indicatorsAll[i]);
                totalFacilityCount.push(totalFacilities[i]);
                nilFacilityCount.push(totalNilFacilities[i]);
            }
            else {
                totalFacilityCount[c] += totalFacilities[i];

                nilFacilityCount[c] += totalNilFacilities[i];
            }

            current = indicatorsAll[i];
        }
        console.log(data);
        console.log(indicatorDistinct);
        console.log(totalFacilityCount);

        console.log(nilFacilityCount);
        console.log(totalFacilities);

      });
        this.chart = new Chart(this.barChart, {
        type: 'bar',
        data:{
        labels: indicatorDistinct,
        datasets: [{
           label: "Total facilities",
           backgroundColor: "green",
           data: totalFacilityCount
        }, {
           label: "Nil performing facilities",
           backgroundColor: "red",
           data: nilFacilityCount
        }],
    
        options: {
            title: {
                text: 'Number of facilities per indicator',
                display: true,
                fontSize: 16,
                position: 'top',
            },
            maintainAspectRatio: true,
            responsive: true
            }
        }
    });
    this.chart.update();
}




    randomRGBA() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    colourArrayGenerator(num) {
        let c = [];
        while(num > 0)
        {
            c.push(this.randomRGBA());
            num--;
        }
        return c;
    }
    

    render() {
        return (
            <canvas
            className="chart-canvas-common bar-chart"
            ref={r => {
                this.barChart = r;
            }}
            />
        )
    }
}
export default MinMaxBarChart;
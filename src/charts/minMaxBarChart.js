import React, { Component } from 'react';
import Chart from 'chart.js';
import './chart-styles.css';
import {csv} from "d3-fetch";
import fetchData from '../common/fetchData';


class MinMaxBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
      }

    componentDidUpdate() {
        this.arrangeData();
    }
    componentDidMount() {
        this.arrangeData();
}

loadChart(tfc, nfc, id) {
    this.chart = new Chart(this.barChart, {
        type: 'bar',
        data:{
        labels: id,
        datasets: [{
           label: "Total facilities",
           backgroundColor: "green",
           data: tfc
        }, {
           label: "Nil performing facilities",
           backgroundColor: "red",
           data: nfc
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
}

async arrangeData() {
    let totalFacilityCount = [];
    let nilFacilityCount = [];
    let indicatorDistinct = [];
    let data = await fetchData(this.props);
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

      this.loadChart(totalFacilityCount, nilFacilityCount, indicatorDistinct);
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
            <div>
            <canvas
            className="chart-canvas-common bar-chart"
            ref={r => {
                this.barChart = r;
            }}
            />
            </div>
        )
    }
}
export default MinMaxBarChart;
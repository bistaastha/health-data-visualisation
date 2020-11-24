import React, { Component } from 'react';
import Chart from 'chart.js';
import './chart-styles.css';


class MinMaxBarChart extends Component {
    componentDidMount() {

        this.chart = new Chart(this.barChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
    
        options: {
            title: {
                text: 'Pie Chart',
                display: true,
                fontSize: 16,
                position: 'top',
            },
            maintainAspectRatio: true,
            responsive: true
            }
        });
    }

    render() {
        return (
            <canvas
            className="chart-canvas-common"
            ref={r => {
                this.barChart = r;
            }}
            />
        )
    }
}
export default MinMaxBarChart;
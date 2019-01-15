import React from 'react';
import Chart from 'chart.js';
import * as dateTimeUtil from '../datetimeutil';

class StatsChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let values = this.getValues();
        let max = Math.max(...values, 1);

        new Chart(this.props.chartId, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Count',
                    data: values,
                    backgroundColor: '#2d89ef',
                    borderColor: '#2d89ef',
                    fill: false,
                    lineTension: 0
                }],
                labels: this.getLabels()
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: max
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }

    getLabels() {
        return dateTimeUtil.getPeriodDts(this.props.period, this.props.dateTime);
    }

    getValues() {
        let countByDt = {};
        this.props.data.map(x => { countByDt[x.dt] = x.count });
        return this.getLabels().map(x => {
            return (x in countByDt) ? countByDt[x] : 0;
        });
    }

    render() {
        let chartId = this.props.chartId;
        return (
            <canvas id={chartId} width="200" height="100"></canvas>
        );
    }
}

export default StatsChart;
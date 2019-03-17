import React, { Component } from 'react';
import Chart from '../Chart/Chart';
// import { Bar } from 'react-chartjs-2';
// import axios from 'axios';


class ContributedChart extends Component {

    constructor(props) {
        console.log("in contributed chart");

        super(props);
        this.state = {
            chartData: {},
            xVals: props.xVals,
            yVals: props.yVals
        };
    }

    componentDidMount() {
        console.log("in component did mount");
        this.getChartData();
    }

    getChartData() {
        console.log("xval" + this.state.xVals);
        console.log(this.state.yVals);
        this.setState({
            chartData: {
                labels: this.state.xVals,
                datasets: [
                    {
                        label: 'dollars',
                        data: this.state.yVals,
                        backgroundColor: [
                            'rgb(255, 99, 132, 0.6)',
                            'rgb(54, 162, 235, 0.6)',
                            'rgb(255, 206, 86, 0.6)',
                            'rgb(75, 192, 192, 0.6)',
                            'rgb(153, 102, 255, 0.6)',
                            'rgb(255, 159, 64, 0.6)',
                            'rgb(255, 99, 132, 0.6)',
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: 'black',
                    }
                ]
            }
        });
        // })
    }


    render() {
        console.log("chartdata" + this.state.chartData);
        return (
            <>
                <div className="contributedChart" >
                    <header className="chart-header">
                        <h3>
                            Contributed Comparison </h3>
                    </header>
                    <Chart chartData={this.state.chartData} legendPosition="bottom" />
                </div>
            </>

        );
    }

}

export default ContributedChart;

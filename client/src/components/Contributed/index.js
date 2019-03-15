import React, { Component } from 'react';
import Chart from "./components/Chart";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class Contributed extends Component {

    constructor() {
        super();
        this.state = {
            chartData: {},
        };
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        axios.get(`http://localhost:8000/api/charts`)
            .then(res => {
                const contribution = res.data;
                let race = ["Auditor", "Candidate", "Clerk & Recorder", "Council-At-Large", "District Councilmember", "Mayor"];
                let amount = [];

                contribution.forEach(element => {
                    race.push(element.race);
                    amount.push(element.amount);
                });
                this.setState({
                    chartData: {
                        labels: race,
                        datasets: [
                            {
                                label: 'dollars',
                                data: amount,
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
            })
    }


    render() {
        return (
            <div className="contributedChart" >
                <header className="chart-header">
                    <h3>
                        Contributed Comparison </h3>
                </header>
                <Chart chartData={this.state.chartData} legendPosition="bottom" />
            </div>

        );
    }
}

export default Contributed;

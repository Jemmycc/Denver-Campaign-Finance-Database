import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import "./ContributedChart.css";
import { Row, Col } from "../Grid";

import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class ContributedChart extends Component {

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

        let race = this.state.race;
        let year = this.state.year;
        let amount = this.state.amount;

        axios.post(`/api/contributedinfo`), {
            params: {
                race: this.state.selectedRace,
                year: this.state.selectedYear,
                amount: this.state.selectedAmount,
            }
        }

        // let years = ["2012", "2013", "2014", "2015", "2016", "2017",];
        // let amount = [50, 30, 70, 10, 10];

        contribution.forEach(element => {
            race.push(element.race);
            amount.push(element.amount);
        });

        console.log(years);
        console.log(amount);
        this.setState({
            chartData: {
                labels: years,
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
        // })
    }


    render() {
        console.log(this.state.chartData);
        return (
            <>
                <Container>
                    <div className="contributedChart" >
                        <header className="chart-header">
                            <h3>
                                Contributed Comparison </h3>

                            <h4> {this.state.selectedRace}</h4>
                        </header>


                        <Row>
                            <Col size="md-2"></Col>

                            <Col size="md-8">
                                <h4> {this.state.selectedRace}</h4>
                                <Chart chartData={this.state.chartData} legendPosition="bottom" />
                            </Col>

                            <Col size="md-2"></Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}

export default ContributedChart;

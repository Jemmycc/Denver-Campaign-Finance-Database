import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import "./ContributedChart.css";
import { Row, Col } from "../Grid";
import "./YearlyContributedChart.css";
// import { Bar } from 'react-chartjs-2';
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
        // axios.get(`/api/contributed`)
        //     .then(res => {
        // const contribution = res.data;
        let years = ["2012", "2013", "2014", "2015", "2016", "2017",];
        let amount = [50, 30, 70, 10, 10];

        // contribution.forEach(element => {
        //     race.push(element.race);
        //     amount.push(element.amount);
        // });
        console.log(years);
        console.log(amount);
        this.setState({
            chartData: {
                labels: campaignNames,
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
    }


    render() {
        console.log(this.state.chartData);
        return (
            <>
                <Container>
                    <div className="contributedChart" >
                        <header className="chart-header">
                            <h3>
                                Yearly Contributed Comparison </h3>

                            <h4> {this.state.selectedYear}</h4>
                        </header>


                        <Row>
                            <Col size="md-2"></Col>

                            <Col size="md-8">
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

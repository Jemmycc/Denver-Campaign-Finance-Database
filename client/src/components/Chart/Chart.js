import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import "./Chart.css";



class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        amount: 'dollars'
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: "",
                            fontSize: 75
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            labels: {
                                fontColor: 'black'
                            }
                        },
                        layout: {
                            padding: {
                                left: 50,
                                right: 0,
                                bottom: 0,
                                top: 0
                            }
                        },
                        tooltips: {
                            labels: true
                        }
                    }}
                />
            </div>
        )
    }
}


export default Chart;
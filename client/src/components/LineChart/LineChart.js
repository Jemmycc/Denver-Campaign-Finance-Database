import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import "./LineChart.css";



class LineChart extends Component {

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
                <Line
                    data={this.props.chartData}
                    width={250}
                    height={150}
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
                                left: 0,
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


export default LineChart;
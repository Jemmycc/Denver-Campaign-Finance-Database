import React, { Component } from 'react';
import Chart from '../Chart/Chart';


class ContributedChart extends Component {
    constructor(props) {
        super(props);
        this.state = { chartData: {} };
    }

    componentDidMount(prevProps) {
        // if (this.props.xVals !== prevProps.xVals || this.props.yVals !== prevProps.yVals) {
        this.getChartData();
        // }
    }

    getChartData() {
        this.setState({
            chartData: {
                labels: this.props.xVals,
                datasets: [
                    {
                        label: 'dollars',
                        data: this.props.yVals,
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
        return (
            <>
                <div className="contributedChart" >
                    <header className="chart-header">
                        <h3>
                            Contributed Comparison </h3>
                    </header>
                    <Chart chartData={this.state.chartData} legendPosition="left" />
                </div>
            </>
        );
    }
}

export default ContributedChart;

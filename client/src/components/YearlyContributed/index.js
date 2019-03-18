import React from 'react';
import { Row, Col } from "../Grid";
import axios from 'axios';
import "./YearlyContributed.css";
import YearlyContributedChart from "../YearlyContributedChart/YearlyContributedChart";


class YearlyContributed extends React.Component {
    state = {
        campaignYears: [],
        campaignAmounts: [],
        selectedYear: "",
        selectedAmount: "",
        xVals: [],
        yVals: [],
        haveData: false
    }

    componentDidMount() {
        var selectedYear = (window.location.pathname === "/") ? "" : sessionStorage.getItem("selectedYear");
        axios.get('/api').then((res) => {
            this.setState({
                campaignYears: res.data.response[1],
                selectedYear: selectedYear
            });
            if (this.state.selectedYear.length) {
                this.getYearlyContributedData();
            }
        }).catch((err => console.log(err)));
    }
    getYearlyContributedData = () => {
        axios.post('/api/yearlycontributedinfo', {
            params: {
                year: this.state.selectedYear
            }
        }).then((res) => {
            console.log(res.data);
            let xVals = [];
            let yVals = [];

            for (let i = 0; i < res.data.response.length; i++) {
                xVals.push(res.data.response[i]._id);
                yVals.push(res.data.response[i].total);
            }

            this.setState({ xVals: xVals, yVals: yVals, haveData: true });
        }).catch((err => console.log(err)))
    }

    handleSubmit = (event) => {
        var home = (window.location.pathname === "/") ? true : false;
        if (home) {
            //set session storage and naviagte to "/yearlycontributed"
            sessionStorage.setItem("selectedYear", this.state.selectedYear)
            window.location = "yearlyContributed"
        }
        else {
            //get data from db
            this.getYearlyContributedData();
        }
    }

    handleYearChange = event => {
        this.setState({ selectedYear: event.target.value, campaignYears: this.state.campaignYears });
    }


    render() {
        console.log("Campaign Years");
        console.log(this.state.campaignYears);
        return (
            <>
                <Row className="flex-wrap-reverse">
                    <Col size="md-10">
                        <h4 className="title">Yearly Campaign Contribution Comparison</h4>
                        <h5> Find out donors' contributions in each campaign each year. </h5>
                        <form className="formyearlyContributed">
                            <div>
                                <label htmlFor="year-choice">Year:</label>
                                <input
                                    list="years"
                                    id=""
                                    name=""
                                    className=""
                                    placeholder="Year"
                                    value={this.state.selectedYear}
                                    onChange={this.handleYearChange} />
                                <datalist id="years">
                                    {this.state.campaignYears.map((year, index) => (
                                        <option value={year} key={index} />
                                    ))}
                                </datalist>
                            </div>
                        </form>
                    </Col>
                    <Col size="md-2">
                        <button
                            type="submit"
                            className="btn submitBtn"
                            onClick={this.handleSubmit}>
                            Search
                    </button>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-1">
                    </Col>
                    <Col size="md-10">
                        {this.state.haveData ? <YearlyContributedChart xVals={this.state.xVals} yVals={this.state.yVals} /> : < div />}
                        {/* // <h4>YEAR: {this.state.selectedRace}</h4> */}
                    </Col>
                    <Col size="md-1">
                    </Col>
                </Row>
            </>
        );
    }
}

export default YearlyContributed;
import React from 'react';
import { Row, Col } from "../Grid";
import axios from 'axios';
import "./YearlyContributedSearch.css";
// import moment from 'moment/moment.js'

class YearlyContributedSearch extends React.Component {
    state = {
        campaignYears: [],
        campaignAmounts: [],
        selectedYear: "",
        selectedAmount: "",
    }

    componentDidMount() {
        axios.get('/api').then((res) => {
            this.setState({ campaignYears: res.data.response[1], campaignAmounts: res.data.response[3] });
        }).catch((err => console.log(err)));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.selectedYear, this.state.selectedAmount);
        let res = this.state.selectedAmount.split("-");
        let minAmount = res[0];
        let maxAmount = res[1];

        console.log(this.state.selectedYear, minAmount, maxAmount);

        axios.post('/api/yearlycontributedinfo', {
            params: {
                year: this.state.selectedYear,
                minAmt: minAmount,
                maxAmt: maxAmount
            }
        }).then((res) => {
            console.log(res.data);

        }).catch((err => console.log(err)))


    }


    handleYearChange = event => {
        this.setState({ selectedYear: event.target.value });
    }

    handleAmountChange = event => {
        this.setState({ selectedAmount: event.target.value });
    }

    render() {
        return (
            <>
                <Row className="flex-wrap-reverse">
                    <Col size="md-10">
                        <h4 className="title">Yearly Contribution Comparison</h4>
                        <form>
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
                                    {/* {this.state.campaignYears.map((year, index) => (
                                        <option value={year} key={index} />
                                    ))} */}

                                    <option value="2012" key={0} />
                                    <option value="2013" key={1} />
                                    <option value="2014" key={2} />
                                    <option value="2015" key={3} />
                                    <option value="2016" key={4} />
                                    <option value="2017" key={5} />
                                    <option value="2018" key={6} />
                                </datalist>
                            </div>

                            <div>
                                <label htmlFor="amount-choice">Amount:</label>
                                <input
                                    list="amount"
                                    id=""
                                    name=""
                                    className=""
                                    placeholder="Amount"
                                    value={this.state.selectedAmount}
                                    onChange={this.handleAmountChange} />
                                <datalist id="amount">
                                    {this.state.campaignAmounts.map((amount, index) => (
                                        <option value={amount} key={index} />
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
            </>
        );
    }
}


export default YearlyContributedSearch;
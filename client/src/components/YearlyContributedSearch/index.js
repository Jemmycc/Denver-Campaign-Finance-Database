import React from 'react';
import { Row, Col } from "../Grid";
import axios from 'axios';
import "./YearlyContributedSearch.css";

class YearlyContributedSearch extends React.Component {
    state = {
        campaignYears: [],
        campaignAmounts: [],
        selectedYear: "",
        selectedAmount: "",
    }

    componentDidMount() {
        axios.get('/api').then((res) => {
            this.setState({ campaignYears: res.data.response[1], campaignRaces: res.data.response[2], campaignAmounts: res.data.response[3] });
        }).catch((err => console.log(err)));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.selectedYear);
        // let res = this.state.selectedAmount.split("-");
        // let minAmount = res[0];
        // let maxAmount = res[1];

        console.log(this.state.selectedYear);

        axios.post('/api/yearlycontributedinfo', {
            params: {
                // race: this.state.selectedRace,
                year: this.state.selectedYear,
                // amount: this.state.selectedAmount,
                // minAmt: minAmount,
                // maxAmt: maxAmount
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err => console.log(err)))
    }

    handleYearChange = event => {
        this.setState({ selectedYear: event.target.value });
    }

    // handleAmountChange = event => {
    //     this.setState({ selectedAmount: event.target.value });
    // }

    render() {
        return (
            <>
                <Row className="flex-wrap-reverse">
                    <Col size="md-10">
                        <h4 className="titleYearly">Yearly Campaign Contribution Comparison</h4>
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
                                    <option value="2012" key={0} />
                                    <option value="2013" key={1} />
                                    <option value="2014" key={2} />
                                    <option value="2015" key={3} />
                                    <option value="2016" key={4} />
                                    <option value="2017" key={5} />
                                    <option value="2018" key={6} />
                                </datalist>
                            </div>

                            {/* <div>
                                <label htmlFor="amount-choice">Amount:</label>
                                <input
                                    list="amount"
                                    id=""
                                    name=""
                                    className=""
                                    placeholder="Select Amount"
                                    value={this.state.selectedAmount}
                                    onChange={this.handleAmountChange} />
                                <datalist id="amount">
                                    <option value="500-999" key={0} />
                                    <option value="1000-1999" key={1} />
                                    <option value="2000-2999" key={2} />
                                    <option value="3000-3999" key={3} />
                                    <option value="4000-4999" key={4} />
                                    <option value="5000-999999" key={5} />
                                </datalist>
                            </div> */}

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
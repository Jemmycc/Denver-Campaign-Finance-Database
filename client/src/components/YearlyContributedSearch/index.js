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

    handleSubmit() {
        // event.preventDefault();
        console.log(this.state.selectedRace, this.state.selectedYear, this.state.selectedAmount);
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
                    <Col size="md-11">
                        <h4 className="title">Yearly Contribution Comparison</h4>
                        <form>
                            <label htmlFor="year-choice">Year:</label>
                            <input
                                list="year"
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

                            <button
                                type="submit"
                                className="btn btn-success btn-block submitBtn"
                                onClick={this.handleSubmit}>
                                Search
                    </button>
                        </form>
                    </Col>
                </Row>
            </>
        );
    }
}


export default YearlyContributedSearch;
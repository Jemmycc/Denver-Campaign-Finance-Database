import React from 'react';
import { Row, Col } from "../Grid";
import axios from 'axios';
import "./ContributedSearch.css";

class ContributedSearch extends React.Component {

    state = {
        campaignRaces: [],
        campaignYears: [],
        campaignAmounts: [],
        selectedRace: "",
        selectedYear: "",
        selectedAmount: "",
    }

    componentDidMount() {
        axios.get('/api').then((res) => {
            this.setState({ campaignRaces: res.data.response[2], });
        }).catch((err => console.log(err)));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.selectedRace);
        // let res = this.state.selectedAmount.split("-");
        // let minAmount = res[0];
        // let maxAmount = res[1];

        console.log(this.state.selectedRace);

        axios.post('/api/contributedinfo', {
            params: {
                race: this.state.selectedRace
                // year: this.state.selectedYear,
                // amount: this.state.selectedAmount
                // minAmt: minAmount,
                // maxAmt: maxAmount
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err => console.log(err)))
    }

    handleRaceChange = event => {
        this.setState({ selectedRace: event.target.value });
    }

    // handleYearChange = event => {
    //     this.setState({ selectedYear: event.target.value });
    // }

    // handleAmountChange = event => {
    //     this.setState({ selectedAmount: event.target.value });
    // }



    render() {
        return (
            <>
                <Row className="flex-wrap-reverse">
                    <Col size="md-10">
                        <h4 className="title">Contribution Comparison</h4>
                        <h5> Find out the amount contributed in each specific race each year. </h5>
                        <form className="formContributed">
                            <div>
                                <label htmlFor="race-choice">Race:</label>
                                <input
                                    list="races"
                                    id=""
                                    name=""
                                    className=""
                                    placeholder="Select Race"
                                    value={this.state.selectedRace}
                                    onChange={this.handleRaceChange} />
                                <datalist id="races">
                                    {this.state.campaignRaces.map((race, index) => (
                                        <option value={race} key={index} />
                                    ))}
                                </datalist>
                            </div>
                            {/* <div>
                                <label htmlFor="year-choice">Year:</label>
                                <input
                                    list="years"
                                    id=""
                                    name=""
                                    className=""
                                    placeholder="Select Year"
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
                            </div> */}
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


export default ContributedSearch;
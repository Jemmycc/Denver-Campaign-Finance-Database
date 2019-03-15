import React from 'react';
import { Row, Col } from "../Grid";
import axios from 'axios';
import "./ContributedSearch.css";
// import moment from 'moment/moment.js'

// "Auditor", "Candidate", "Clerk & Recorder", "Council-At-Large", "District Councilmember", "Mayor"

class ContributedSearch extends React.Component {

    races

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
            this.setState({ campaignRaces: res.data.response[2], campaignYears: res.data.response[1], campaignAmounts: res.data.response[3] });
        }).catch((err => console.log(err)));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.selectedRace, this.state.selectedYear, this.state.selectedAmount);
    }


    handleRaceChange = event => {
        this.setState({ selectedRace: event.target.value });
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
                        <h4 className="title">Contribution Comparison</h4>
                        <form>
                            <label htmlFor="race-choice">Race:</label>
                            <input
                                list="race"
                                id=""
                                name=""
                                className=""
                                placeholder="Select Race"
                                value={this.state.selectedRace}
                                onChange={this.handleRaceChange} />
                            <datalist id="races">
                                {this.state.campaignRaces.map((race, index) => (
                                    <option value={race} key={index} />

                                    /* <option value="Auditor" key={0} />
                                    <option value="Candidate" key={1} />
                                    <option value="Clerk+Recorder" key={2} />
                                    <option value="Council-At-Large" key={3} />
                                    <option value="District Councilmember" key={4} />
                                    <option value="Mayor" key={5} /> */
                                ))}
                            </datalist>


                            <label htmlFor="year-choice">Year:</label>
                            <input
                                list="year"
                                id=""
                                name=""
                                className=""
                                placeholder="Select Year"
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
                                placeholder="Select Amount"
                                value={this.state.selectedAmount}
                                onChange={this.handleAmountChange} />
                            <datalist id="amount">
                                {/* {this.state.campaignAmounts.map((amount, index) => ( */}
                                <option value="500-1000" key={0} />
                                <option value="1000-2000" key={1} />
                                <option value="2000-3000" key={2} />

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


export default ContributedSearch;
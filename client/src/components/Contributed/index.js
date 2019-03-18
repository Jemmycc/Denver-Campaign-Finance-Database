import React from 'react';
import { Row, Col } from "../Grid";
import axios from 'axios';
import "./Contributed.css";
import ContributedChart from "../ContributedChart/ContributedChart";


class Contributed extends React.Component {
    state = {
        campaignRaces: [],
        campaignYears: [],
        campaignAmounts: [],
        selectedRace: "",
        selectedYear: "",
        selectedAmount: "",
        xVals: [],
        yVals: [],
        haveData: false
    }

    componentWillMount() {
        axios.get('/api').then((res) => {
            this.setState({ campaignRaces: res.data.response[2] });
        }).catch((err => console.log(err)));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/contributedinfo', {
            params: {
                race: this.state.selectedRace
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

    handleRaceChange = event => {
        this.setState({ selectedRace: event.target.value });
    }

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
                        {this.state.haveData ? <ContributedChart xVals={this.state.xVals} yVals={this.state.yVals} /> : < div />}
                        {/* // <h4>RACE: {this.state.selectedRace}</h4> */}
                    </Col>
                    <Col size="md-1">
                    </Col>
                </Row>
            </>
        );
    }
}

export default Contributed;
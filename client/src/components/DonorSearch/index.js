import React from 'react';
import { Row, Col } from "../Grid";
import "./DonorSearch.css";
import axios from 'axios';

class DonorSearch extends React.Component {
    state = {
        campaignNames: [],
        campaignYears: [],
        selectedCampaign: "",
        selectedYear: "",
    }

    componentDidMount() {

        axios.get('/api').then((res) => {
            this.setState({ campaignNames: res.data.response[0], campaignYears: res.data.response[1] });
        }).catch((err => console.log(err)));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('call your function here with these args ' + this.state.selectedCampaign, this.state.selectedYear);
    }

    handleCampaignChange = event => {

        this.setState({ selectedCampaign: event.target.value });

    }

    handleYearChange = event => {

        this.setState({ selectedYear: event.target.value });

    }

    render() {
        console.log(this.state.campaignNames);
        return (
            <>
                <Row className="flex-wrap-reverse">
                    <Col size="md-11">
                        <h4 className="title">Donor's Contribution</h4>
                        <form>
                            <label htmlFor="campaign-choice">Campaign name:</label>
                            <input
                                list="campaigns"
                                id=""
                                name=""
                                className=""
                                placeholder="Select Campaign"
                                value={this.state.selectedCampaign}
                                onChange={this.handleCampaignChange} />
                            <datalist id="campaigns">
                                {this.state.campaignNames.map((campaign, index) => (
                                    <option value={campaign} key={index} />
                                ))}
                            </datalist>

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


export default DonorSearch;
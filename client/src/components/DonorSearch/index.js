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
            // <div className ="container-research" style={{
            //     backgroundColor: "rgb(230, 230, 230)"
            // }}>
            <div>
                < Row className="flex-wrap-reverse" >
                    <Col size="md-10" >
                        <h4 className="title">Donor's Contribution</h4>
                        <form>
                            <div>
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
                            </div>

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

                                    {/* <option value="2012" key={0} />
                                    <option value="2013" key={1} />
                                    <option value="2014" key={2} />
                                    <option value="2015" key={3} />
                                    <option value="2016" key={4} />
                                    <option value="2017" key={5} />
                                    <option value="2018" key={6} /> */}
                                </datalist>
                            </div>
                        </form>
                    </Col>
                    <Col size="md-2">
                        <button
                            type="submit"
                            className="btn submitBtn"
                            onClick={this.handleSubmit}>Search </button>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default DonorSearch;
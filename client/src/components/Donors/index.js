import React from 'react';
import { Row, Col } from "../Grid";
import "./Donors.css";
import DonorChart from "../DonorChart/DonorChart";
import axios from 'axios';


class Donors extends React.Component {
    state = {
        campaignNames: [],
        campaignYears: [],
        selectedCampaign: "",
        selectedYear: ""
    }

    componentDidMount() {
        var selectedCampaign = (window.location.pathname === "/") ? "" : sessionStorage.getItem("selectedCampaign");
        axios.get('/api').then((res) => {
            this.setState({
                campaignNames: res.data.response[0],
                campaignYears: res.data.response[1],
                selectedCampaign: selectedCampaign,
                // selectedYear: selectedYear
            });
            if (this.state.selectedCampaign.length === "" && this.state.selectedYear.length === 4) {
                this.getDonorsInfoData();
            }
        }).catch((err => console.log(err)));
    }

    getDonorsInfoData = () => {
        axios.post('/api/donorsinfo', {
            params: {
                campaign: this.state.selectedCampaign,
                year: this.state.selectedYear
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err => console.log(err)))
    }

    handleSubmit = (event) => {
        var home = (window.location.pathname === "/") ? true : false;
        if (home) {
            sessionStorage.setItem("selectedCampaign", this.state.selectedCampaign)
            window.location = "donors"
        }
        else {
            this.getDonorsInfoData();
        }
    }

    handleCampaignChange = event => {
        this.setState({ selectedCampaign: event.target.value });
    }

    handleYearChange = event => {
        this.setState({ selectedYear: event.target.value });
    }



    render() {
        return (
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

                <Row>
                    <Col size="md-1">
                    </Col>
                    <Col size="md-10">
                    </Col>
                    <Col size="md-1">
                    </Col>
                </Row>

            </div >
        );
    }
}


export default Donors;
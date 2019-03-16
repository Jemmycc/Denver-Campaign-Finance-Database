import React, { Component } from 'react';
// import Nav from '../components/Nav';
import CoinTable from '../components/CoinTable';
import axios from "axios";

// import Jumbotron from '../components/Jumbotron';
//import CampaignSearch from '../components/CampaignSearch';
// import Card from '../components/Card';
// import Form from "../components/Form";
//import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from '../components/Grid';
// import { List } from "../components/List";

class Donor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campaignNames: [],
            direction: {
                amount: "asc",
            }
        }
        // this.sortBy = this.sortBy.bind(this)
    }

    componentDidMount() {

        axios.get('/api/donors').then((res) => {
            this.setState({ campaignNames: res.data.response });
        }).catch((err => console.log(err)));
    }

    // sortBy(key) {
    //     this.setState({
    //         data: data.sort((a, b) => (
    //             this.state.direction[key] === 'asc'
    //                 ? parseFloat(a[key]) - parseFloat(b[key])
    //                 : parseFloat(b[key]) - parseFloat(a[key])
    //         )),
    //         direction: {
    //             [key]: this.state.direction[key] === 'asc'
    //                 ? 'desc'
    //                 : 'asc'
    //         }
    //     })
    // }


    render() {
        return (
            <>

                <Container style={{
                    backgroundColor: 'blue'
                }}>>
                    <Row>
                        <Col size="md-12">
                            <h2>
                                <strong>Donor's Contribution</strong>
                            </h2>
                        </Col>

                        <CoinTable
                            campaignNames={this.state.campaignNames}
                        // sortBy={this.sortBy()}
                        />
                    </Row>
                </Container>
            </>
        );
    }
}

export default Donor;

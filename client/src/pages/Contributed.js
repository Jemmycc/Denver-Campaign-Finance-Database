import React, { Component } from 'react';
// import Nav from "../components/Nav";
// import Jumbotron from '../components/Jumbotron';
// import DonorSearch from '../components/DonorSearch';
// import SelectBox from "../components/selections/selectBox";
//import CampaignSearch from '../components/CampaignSearch';
// import Card from '../components/Card';
// import Form from "../components/Form";
//import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from '../components/Grid';
// import { List } from "../components/List";

class Contributed extends Component {
    state = {};

    render() {
        return (
            <>
                {/* <Nav /> */}
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1 className="text-center">
                                <strong>Contributed</strong>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Contributed;

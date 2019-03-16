import React, { Component } from 'react';
// import Nav from "../components/Nav";
import Jumbotron from '../components/Jumbotron';
import DonorSearch from '../components/DonorSearch';
import ContributedSearch from '../components/ContributedSearch';
import YearlyContributedSearch from '../components/YearlyContributedSearch';
// import Card from '../components/Card';
// import Form from "../components/Form";
//import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from '../components/Grid';
// import { List } from "../components/List";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>Welcome</strong>
                </h1>
                <h3>
                  A searchable presentation of municipal campaign contributions, featuring data published by the City of Denver (last updated March 1, 2019).
              </h3>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-3"> </Col>
            <Col size="md-6">
              <DonorSearch />
            </Col>
            <Col size="md-3"> </Col>
            <Col size="md-3"> </Col>
            <Col size="md-6">
              <ContributedSearch />
            </Col>
            <Col size="md-3"> </Col>
            <Col size="md-3"> </Col>
            <Col size="md-6">
              <YearlyContributedSearch />
            </Col>
            <Col size="md-3"> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;

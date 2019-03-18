import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Donors from '../components/Donors';
import Contributed from '../components/Contributed';
import YearlyContributed from '../components/YearlyContributed';
import { Col, Row, Container } from '../components/Grid';

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
              <Donors />
            </Col>
            <Col size="md-3"> </Col>
          </Row>

          <Row>
            <Col size="md-12"> </Col>
          </Row>

          <Row>
            <Col size="md-3"> </Col>
            <Col size="md-6">
              <Contributed />
            </Col>
            <Col size="md-3"> </Col>
          </Row>

          <Row>
            <Col size="md-12"> </Col>
          </Row>

          <Row>
            <Col size="md-3"> </Col>
            <Col size="md-6">
              <YearlyContributed />
            </Col>
            <Col size="md-3"> </Col>
          </Row>

        </Container >
      </div >
    );
  }
}

export default Home;

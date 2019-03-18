import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import YearlyContributed from '../components/YearlyContributed';

class YearlyContributePage extends Component {
    state = {};

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col size="md-12">
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-12">
                            <YearlyContributed />
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-12">
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default YearlyContributePage;
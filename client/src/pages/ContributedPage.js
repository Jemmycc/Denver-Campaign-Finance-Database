import React, { Component } from 'react';
import Contributed from "../components/Contributed";
import { Col, Row, Container } from '../components/Grid';

class ContributePage extends Component {
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
                            <Contributed />
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

export default ContributePage;

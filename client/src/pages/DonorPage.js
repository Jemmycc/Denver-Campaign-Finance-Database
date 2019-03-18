import React, { Component } from 'react';
import DonorsInfoTable from '../components/DonorsInfoTable';
import Donors from "../components/Donors";
import { Col, Row, Container } from '../components/Grid';

// class DonorPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campaignNames: [],
//             direction: {
//                 amount: "asc",
//             }
//         }
//         this.sortBy = this.sortBy.bind(this)
//     }

// componentDidMount() {

//     axios.get('/api/donors').then((res) => {
//         this.setState({ campaignNames: res.data.response });
//     }).catch((err => console.log(err)));
// }

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

class DonorPage extends Component {
    state = {};



    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Donors />
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-12">
                            <DonorsInfoTable
                                campaignNames={this.state.campaignNames}
                            // sortBy={this.sortBy()}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default DonorPage;

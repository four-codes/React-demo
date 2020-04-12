import React, { Component, Fragment } from 'react'
import { Table } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import './Bank.css';



class Bank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            counttype: [],
            amount: null,
            selectCountType: ''
        }

    }

    transactiondetails = (e) => {
        e.preventDefault();
        const selectCountType = this.state.selectCountType;
        const amount = this.state.amount;
        this.setState({
            selectCountType: e.target.value
        })
        const params = {
            amount: amount,
            selectCountType: selectCountType
        };

        let self = this;
        fetch('/users/bank', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }
        ).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            const data = response.json();
            return data;
        }).then(function (data) {
            if (data !== 'No Record') {
                self.setState({ details: data });
            }

        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    componentDidMount() {

        let self = this;
        fetch('/users/denominationlist').then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            self.setState({ counttype: data });
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (

            <Fragment>
                <div>
                    <Form className="mt-2" variant="info" noValidate validated={this.state.validate} onSubmit={this.handleSubmit}>

                        <Form.Row className="_color ">
                            <Form.Group as={Col} md="2" mr="1" >
                                <Form.Label>&#8377; Amount</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="amount"
                                    onChange={this.onChange}
                                    required
                                    value={this.state.amount}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="2" mr="1" >
                                <Form.Label>&#8377; Amount Type</Form.Label>
                                <Form.Control as="select" name="selectCountType" className="col-lg-12" md="2" value={this.state.selectCountType} onChange={this.onChange} >
                                    <option>select</option>
                                    {this.state.counttype.map((member, key) =>
                                        <option value={member.counttype} key={key}>{member.counttype}</option>)}

                                </Form.Control>
                            </Form.Group>

                            {/* </Form.Row>
                    <Form.Row className="mt-2"> */}
                            <Form.Group as={Col} md="2" className="submitButton">
                                <Button variant="primary" type="button" onClick={this.transactiondetails} >
                                    {/* <Button variant="primary" type="button" onClick={this.handleSubmit}> */}
                                Submit
                            </Button>
                            </Form.Group>
                            {/* 
                        <Form.Group as={Col} md="1">
                            <Button variant="primary" type="reset">
                                Reset
                            </Button>
                        </Form.Group> */}
                        </Form.Row>

                    </Form>
                </div>


                {this.state.details.length > 0 ? (
                    <Table responsive="sm" hover className="text-center mt-5">
                        <thead >
                            <tr>
                                <th>2000</th>
                                <th>500</th>
                                <th>200</th>
                                <th>100</th>
                                <th>50</th>
                                <th>20</th>
                                <th>10</th>
                                <th>5</th>
                                <th>2</th>
                                <th>1</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.details.map((member, key) =>
                                <tr key={key}>
                                    <td>{member.a} </td>
                                    <td>{member.b} </td>
                                    <td>{member.c}</td>
                                    <td>{member.d}</td>
                                    <td>{member.e}</td>
                                    <td>{member.f}</td>
                                    <td>{member.g}</td>
                                    <td>{member.h}</td>
                                    <td>{member.i}</td>
                                    <td>{member.j}</td>
                                    <td>{member.total}</td>
                                </tr>
                            )}

                        </tbody>
                    </Table>
                ) : (
                        <div>
                            <h1>No records</h1>
                        </div>
                    )}

            </Fragment>
        )
    }
}
export default Bank;
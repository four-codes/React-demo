import React, { Component, Fragment } from 'react'
import { Table } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';



class Bank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    transactiondetails = () => {
        let self = this;
        fetch('/users/bank').then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            self.setState({ details: data });
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    componentDidMount() {
        
        let self = this;
        fetch('/users/bank').then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            self.setState({ details: data });
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    render() {
        return (

            <Fragment>
                <div>
                    <Form className="mt-2" variant="info" noValidate validated={this.state.validate} onSubmit={this.handleSubmit}>

                        <Form.Row className="_color ">
                            <Form.Group as={Col} md="2" mr="1" >
                                <Form.Label>&#8377; 2000</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="a"
                                    onChange={this.change}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="2" mr="1" >
                            <Form.Label>&#8377; 2000</Form.Label>


                            <Form.Control as="select" className="col-lg-6" md="2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            </Form.Group>

                            {/* </Form.Row>
                    <Form.Row className="mt-2"> */}
                            <Form.Group as={Col} md="2" className="mt-5">
                                <Button variant="primary" type="submit" >
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

                <Table responsive="sm" striped borderless hover className="text-center mt-5" variant="light">
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


                                {/* <td><button onClick={() => this.edit(member.id)}>EDIT</button></td> */}
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}
export default Bank;
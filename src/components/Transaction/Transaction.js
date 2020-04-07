import React, { Component, Fragment, useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import './Transaction.css';

class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            total: 0
        }

    }


    // onChange = (event) => {
    //     const sum = event.target.name * event.target.value;
    //     this.setState({
    //         total: this.state.total + sum,
    //         [event.target.name]: event.target.value
    //     })
    // }

        onChanged = (event) => {

            console.log(event.target);
            
        // this.setState({
        //     // total: this.state.total + sum,
        //     // [event.target.name]: event.target.value
        // })
    }


        onChange = (event) => {
        // const sum = event.target.name * event.target.value;
        this.setState({
            // total: this.state.total + sum,
            [event.target.name]: event.target.value
        })
    }

    

    handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(this.state);
        // console.log(form.checkValidity())
        if (form.checkValidity() === true) {
            fetch("/users/transaction", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
                
            }).then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((respData) => {
                console.log(respData);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
        
        // this.state.setValidated(true);
        // ValidityState(true);
    };

    render() {
        return (
            <Fragment>
                <Form className="mt-2" variant="info">

                    <Form.Row className="_color ">
                        <Form.Group as={Col} md="2" mr="5" >
                            <Form.Label>&#8377; 2000</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="a"
                                onChange={this.onChange}
                                onChange={this.onChanged}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2" >
                            <Form.Label>&#8377; 500</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="b"
                                onChange={this.onChange}
                                onChange={this.onChanged}

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 200</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                onChange={this.onChange}
                                name="c"
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 100</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="d"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 50</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="e"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 20</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="f"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 10</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="g"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 5</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="h"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="i"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="j"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2" className="float-left">
                        </Form.Group>

                        <Form.Group as={Col} md="2" className="float-left">
                            <Form.Label>&#8377; Total</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="total"
                                onChange={this.onChange}
                                // value={this.state.total}           
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="mt-2">
                        <Form.Group as={Col} md="1">
                            <Button variant="primary" type="button" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form.Group>

                        <Form.Group as={Col} md="1">
                            <Button variant="primary" type="reset">
                                Reset
                            </Button>
                        </Form.Group>
                    </Form.Row>

                </Form>
            </Fragment>
        )
    }
}


export default Transaction;

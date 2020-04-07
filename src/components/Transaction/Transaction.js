import React, { Component, Fragment } from 'react'
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
            total: 0,
            validate: false
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
        
        // console.log(form.checkValidity());
        // event.preventDefault();
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

        this.setState({
            // total: this.state.total + sum,
            validate: true
        })
    };

    render() {
        return (
            <Fragment>
                <Form className="mt-2" variant="info" noValidate validated={this.state.validate} onSubmit={this.handleSubmit}>
                    <Form.Row className="_checkAlign">
                        <Form.Group as={Col} className="mt-2" md="12" mr="0" >
                            <Form.Label >
                                <marquee>Transaction Details</marquee></Form.Label>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row className="_color ">
                        <Form.Group as={Col} md="2" mr="1" >
                            <Form.Label>&#8377; 2000</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="a"
                                onChange={this.onChange}
                                onChange={this.onChanged}
                                required
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
                                required


                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 200</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                onChange={this.onChange}
                                name="c"
                                required

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 100</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="d"
                                onChange={this.onChange}
                                required

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 50</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="e"
                                onChange={this.onChange}
                                required

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 20</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="f"
                                onChange={this.onChange}
                                required


                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 10</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="g"
                                onChange={this.onChange}
                                required

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 5</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="h"
                                onChange={this.onChange}
                                required

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="i"
                                onChange={this.onChange}
                                required

                            />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>&#8377; 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0"
                                name="j"
                                onChange={this.onChange}
                                required

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
                                required

                            // value={this.state.total}           
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="mt-2">
                        <Form.Group as={Col} md="1">
                        <Button variant="primary" type="submit" >
                        {/* <Button variant="primary" type="button" onClick={this.handleSubmit}> */}
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

import React, { Fragment, useState } from 'react'
// import { Form, Button, Row, Col } from 'react-bootstrap'
import { Form, Col, InputGroup, Button } from 'react-bootstrap';


const Register = () => {
    const [values, setValues] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        City: '',
        State: '',
        Zip: ''
    });

    const initialState = {
        FirstName: '',
        LastName: '',
        Username: '',
        City: '',
        State: '',
        Zip: ''
    }
    
    const onChange = (event) => {
        // console.log(event.target.name)
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form);
        // console.log(form.checkValidity())
        if (form.checkValidity() === true) {
            fetch("/users/new", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            }).then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((respData) => {
                console.log(respData);
                setValues(initialState);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    // console.log(values);


    return (
        <Fragment >
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='FirstName'
                            required
                            type="text"
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='LastName'
                            required
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                onChange={onChange}
                                name='Username'
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='City'
                            type="text"
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='State'
                            type="text"
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='Zip'
                            type="text"
                            required
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </Fragment>
    )
}

export default Register;

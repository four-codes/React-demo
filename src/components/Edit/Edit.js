import React, { Fragment, useState, useEffect } from 'react'
import { Form, Col, InputGroup, Button } from 'react-bootstrap';


const Edit = (props) => {
    const [values, setValues] = useState({
        id:'',
        FirstName: '',
        LastName: '',
        Username: '',
        City: '',
        State: '',
        Zip: ''
    });

    const initialState = {
        id: '',
        FirstName: '',
        LastName: '',
        Username: '',
        City: '',
        State: '',
        Zip: ''
    }

    const getUser = async () => {
        const res = await fetch(`/users/${props.match.params.id}`);
        const data = await res.json();
        setValues({
            id: data.id,
            FirstName: data.firstname,
            LastName: data.lastname,
            Username: data.username,
            City: data.city,
            State: data.state,
            Zip: data.zip
        });
    };

    useEffect(()=>{
          getUser();
    },[])

    const onChange = (event) => {
        // console.log(event.target.name)
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        console.log(form);
        // console.log(form.checkValidity())
        if (form.checkValidity() === true) {
            try {
                fetch("/users/update", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                })
                setValues(initialState);
                props.history.push('/Details');
            } catch (error) {
                console.log(error.message);
            }
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    
    
    return (
        <Fragment >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <input type="hidden" value={values.id} name="id" />
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='FirstName'
                            required
                            type="text"
                            value={values.FirstName}
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='LastName'
                            required
                            type="text"
                            value={values.LastName}
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
                                value={values.Username}
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
                            required 
                            value={values.City}
                            />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='State'
                            type="text"
                            required
                            value={values.State}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            onChange={onChange}
                            name='Zip'
                            type="text"
                            required
                            value={values.Zip}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to updates"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Update</Button>
            </Form>
        </Fragment>
    )
}

export default Edit;

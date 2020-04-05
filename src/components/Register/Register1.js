import React, { Fragment, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'


const Register = () => {
    const [values, setValues] = useState({
        Firstname: '',
        Lastname: '',
        emailaddress: '',
        mobilenumber: '',
        Password: ''
    })
    const onChange = (event) => {
        // console.log(event.target.name)
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    console.log(values.Firstname)
    return (

        <Fragment>
            <Form>
            <Row>
                <Col md={10} lg={10} sm={12} xl={6} className='text-danger offset-lg-2'> 
                    <Form.Text className='text-center'> 
                        <h5><u> Register Form </u></h5>
                    </Form.Text>
                </Col>

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name='Firstname' onChange={onChange} type="text" value={values.Firstname} />
                        </Form.Group>
                    </Col>

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Form.Group>
                            <Form.Label>Last Names</Form.Label>
                            <Form.Control name='Lastname' onChange={onChange} type="text" value={values.Lastname} />
                        </Form.Group>
                        </Col>

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='emailaddress' onChange={onChange} type="email" value={values.emailaddress} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col >

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Form.Group>
                            <Form.Label>mobile number</Form.Label>
                            <Form.Control name='mobilenumber' onChange={onChange} type="text" value={values.mobilenumber} />
                        </Form.Group>
                    </Col>

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='Password' onChange={onChange} type="password" value={values.Password} />
                        </Form.Group>
                    </Col>

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Col>

                    <Col md={10} lg={10} sm={12} xl={6} className='offset-lg-2'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
            </Row>
                </Form>
        </Fragment>
    )
}

export default Register

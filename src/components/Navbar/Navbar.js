import React, { Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navigation = () => {
    return (
        <Fragment>
                <Navbar expand="lg" variant="light" bg="light" >
                    <Navbar.Brand bg="info" href="/">Four Times </Navbar.Brand>
                </Navbar>

            <br />

            <Navbar expand="lg" variant="info" bg="light">
                {/* <Navbar.Brand href="#home">J2J.IO</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-2">
                        <Nav.Link to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/Login" as={Link}>Login</Nav.Link>
                        <Nav.Link to="/Register" as={Link}>Register</Nav.Link>
                        <Nav.Link to="/Details" as={Link}>Details</Nav.Link>
                        <Nav.Link to="/Transaction" as={Link}>Transaction</Nav.Link>
                        {/* <NavDropdown title="Country" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">India</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Navigation;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => (
    <Navbar bg="dark" variant="dark" expand="lg"
        sticky="top" style={{ marginBottom: '1rem' }}>
        <LinkContainer to="/">
            <Navbar.Brand href="#home">📇 Rolodex</Navbar.Brand>
        </LinkContainer>
        <Nav>
            <LinkContainer to="/create">
                <Nav.Link>Create</Nav.Link>
            </LinkContainer>
        </Nav>
    </Navbar>
)

export default Navigation
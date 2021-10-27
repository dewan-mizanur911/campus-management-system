import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Campus Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Donation
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Blog
              </Nav.Link>
              <Button variant="primary">Register</Button>
              <Button variant="danger" className="mx-2">Admin</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default CustomNavbar;
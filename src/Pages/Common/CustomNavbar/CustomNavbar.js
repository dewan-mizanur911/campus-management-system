import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const CustomNavbar = () => {
  const { user, logOut } = useAuth();
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Campus Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
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
              {user.email ? (
                <Navbar.Brand className="d-flex justify-content-center align-items-center">
                  <img
                    src={user.photoURL}
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded-circle me-2"
                    alt=""
                  />
                  <Button onClick={logOut} variant="danger">
                    Log Out
                  </Button>
                </Navbar.Brand>
              ) : (
                <Button as={Link} to="/login" variant="danger">
                  Login
                </Button>
              )}

              <Button as={Link} to="/admin" variant="primary" className="mx-2">
                Admin
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default CustomNavbar;
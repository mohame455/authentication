import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const GuestLink = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Authentication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/login">
              <Button variant="outline-success">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline-success">Register</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default GuestLink;

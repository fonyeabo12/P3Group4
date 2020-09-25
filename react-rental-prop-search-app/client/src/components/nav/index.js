import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import pslogolg from "../../Images/ps-full-logo.png";

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img
              src={pslogolg}
              alt="ps brand logotype & symbol"
              style={{ width: 200 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/signout">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navigation;

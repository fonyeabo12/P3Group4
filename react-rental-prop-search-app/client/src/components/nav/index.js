import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import pslogolg from "../../Images/ps-full-logo.png";

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img
            src={pslogolg}
            alt="ps brand logotype & symbol"
            style={{ width: 250 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/signout">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

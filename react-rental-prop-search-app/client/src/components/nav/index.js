import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import pslogolg from "../../Images/ps-full-logo.png";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img src={pslogolg} style={{ width: 200 }} />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#signout">Sign Out</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
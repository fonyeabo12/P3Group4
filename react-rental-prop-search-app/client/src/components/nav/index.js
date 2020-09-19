import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import pslogolg from "../../Images/ps-full-logo.png";
import Home from "../../pages/Home";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand href="home">
        <img
          src={pslogolg}
          alt="ps brand logotype & symbol"
          style={{ width: 200 }}
        />
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Item as="li">
          <Nav.Link to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/profile">Profile</Nav.Link>
        </Nav.Item>

        <Nav.Link to="/about">About</Nav.Link>
        <Nav.Link to="/team">Meet The Team</Nav.Link>
        <Nav.Link to="/signout">Sign Out</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

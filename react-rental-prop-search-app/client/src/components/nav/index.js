import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./style.css";
import pslogolg from "../../Images/ps-full-logo.png";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={pslogolg}
                alt="ps brand logotype & symbol"
                style={{ width: 200 }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Link className="noUnderline" to="/">
                <NavItem>Home</NavItem>
              </Link>
              <Link className="noUnderline" to="/profile">
                <NavItem>Profile</NavItem>
              </Link>
              <Link className="noUnderline" to="/about">
                <NavItem>About</NavItem>
              </Link>
              <Link className="noUnderline" to="/signout">
                <NavItem>Sign Out</NavItem>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

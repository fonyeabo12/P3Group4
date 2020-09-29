import React from "react";
import "./style.css";
import pslogosm from "../../Images/ps-simple-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Nav, Row } from "react-bootstrap";

const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

function Footer() {
  return (
    <div className="content">
      <footer>
        <Row className="middle">
          <Col md={3} sm={8}>
            <img src={pslogosm} alt="ps brand logotype & symbol" />
          </Col>
          <Col md={3} sm={8}>
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Houston, Texas</li>
              <li>(832) 555-5555</li>
              <li>contact@propertysearch.com</li>
            </ul>
          </Col>
          <Col md={3} sm={8}>
            <ul className="list-unstyled" style={iconStyle}>
              <li>
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x" />
              </li>
              <li>
                <FontAwesomeIcon icon={["fab", "instagram-square"]} size="3x" />
              </li>
            </ul>
            <Nav.Link href="/team">
              <h5>Meet The Team</h5>
            </Nav.Link>
          </Col>
        </Row>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Property Search
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
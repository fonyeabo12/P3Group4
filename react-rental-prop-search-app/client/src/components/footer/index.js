import React from "react";
import "./style.css";
import pslogosm from "../../Images/ps-simple-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container>
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
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon="facebook" />
              </li>
              <li>2</li>
              <li>3</li>
            </ul>
            This is the social links area
          </Col>
          <Col md={3} sm={8}>
            <h5>Meet The Team</h5>
          </Col>
        </Row>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Property Search
          </p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;

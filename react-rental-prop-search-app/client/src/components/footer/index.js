import React from "react";
import "./style.css";
import pslogosm from "../../Images/ps-simple-logo.png";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <footer>
        <div className="row middle">
          <div className="col-md-3 col-sm-6">
            <img src={pslogosm} alt="ps brand logotype & symbol" />
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Houston, Texas</li>
              <li>(832) 555-5555</li>
              <li>contact@propertysearch.com</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Meet The Team</h4>
          </div>
        </div>
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

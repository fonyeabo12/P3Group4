import React from "react";
import "./style.css";
import pslogosm from "../../Images/ps-simple-logo.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row middle">
          <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Houston, Tx</li>
              <li>(832) 555-555</li>
              <li>test@property.com</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Property Search
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

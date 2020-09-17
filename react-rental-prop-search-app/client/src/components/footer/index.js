import React from "react";
import "./style.css";
import pslogosm from "../../Images/ps-simple-logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={pslogosm} style={{ width: 75 }} />
        <span className="text-muted">
          Copyright © PropertySearch.com 2020 - All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;

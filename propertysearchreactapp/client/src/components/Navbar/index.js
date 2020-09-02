import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
            >
              Criteria Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Criteria Page"
              className={window.location.pathname === "/Criteria Page" ? "nav-link active" : "nav-link"}
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Team"
              className={window.location.pathname === "/Team" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

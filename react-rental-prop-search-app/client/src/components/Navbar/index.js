import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Assets/css/style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <header>
      <div className="wrapper">

        <div id="name">Property Search</div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              to="/Login"
              className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Start Search"
              className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
            >
              Start Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Search Results"
              className={window.location.pathname === "/Start Search" ? "nav-link active" : "nav-link"}
            >
              Search Results
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Property Filter"
              className={window.location.pathname === "/Search Results" ? "nav-link active" : "nav-link"}
            >
              Property Filter
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Team"
              className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Future Versions"
              className={window.location.pathname === "/Team" ? "nav-link active" : "nav-link"}
            >
              Future Versions
            </Link>
          </li>
        </ul>
      </div>
    </nav>

      </div>

    </header>
  );
}

export default Navbar;



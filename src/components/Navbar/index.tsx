import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">Countries shape</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            {/* <span className="navbar-toggler-icon"></span> */}
            <span><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="detai" className="nav-link">Details</Link>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Home3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

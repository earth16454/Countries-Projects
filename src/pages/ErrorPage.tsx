import React from "react";
import "./pages.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="error-title-404">
          <span className="error-1">4</span>
          <span className="error-2">0</span>
          <span className="error-1">4</span>
        </h1>
        <h2 className="error-text">Sorry! Page not found</h2>
        <Link to="/" className="mt-3">
          <button className="btn-error">Go to Homepage</button>
        </Link>

      </div>
    </>
  );
};

export default ErrorPage;

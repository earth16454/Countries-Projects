import React from "react";
import Navbar from "../components/Navbar";
import "./pages.css";
import CardDetail from "../components/CardDetail";

const Detail: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <CardDetail />
      </div>
    </>
  );
};

export default Detail;

import React from "react";
import Navbar from "../components/Navbar";
import CardCountry from "../components/CardCountry";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <h2 className="text-center mt-3 mt-lg-4 mt-xl-5 mb-3">Countries List</h2> */}
        <h2 className="title">Countries List</h2>
        <SearchBar />
        <CardCountry />
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hook";
import { Countries } from "../../interface/interface";
import "./CardCountry.css";
import { Link } from "react-router-dom";
import TimeZone from "../TimeZone";

const CardCountry: React.FC = () => {
  const state = useAppSelector((state) => state.countriesData);
  // const countries: Countries[] = state.countries;
  const { filterCountries } = useAppSelector((state) => state.countriesData)

  return (
    <>
      <div className="row gy-4 gx-3">
        {filterCountries.map((country: Countries, index: number) => {
          return (
            <div className="col-12 col-md-6 col-xl-6" key={index}>
              <Link to={`details/${country.name.common}`}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-countries">
                        <span style={{ marginRight: 8 }}>
                          <img src={country.flags.png} alt={country.flags.alt} width={30} />
                        </span>
                        {country.name.common}
                      </h5>
                      <span className="text-end">{country.cca2}</span>
                    </div>
                    <hr />
                    <div className="row country-detail gy-2">
                      <div className="col-5 col-md-4">Official name :</div>
                      <div className="col-7 col-md-8">{country.name.official}</div>
                      <div className="col-5 col-lg-4">Capital :</div>
                      <div className="col-7 col-lg-8">{country.capital}</div>
                      <div className="col-5 col-lg-4">Region :</div>
                      <div className="col-7 col-lg-8">{country.region}</div>
                      <div className="col-5 col-lg-4">Sub-Region :</div>
                      <div className="col-7 col-lg-8">{country.subregion}</div>
                      <div className="col-5 col-lg-4">Time :</div>
                      <div className="col-7 col-lg-8">
                        <TimeZone timezone={country.timezones[0]} />
                      </div>
                      {/* <div className="col-5 col-md-4">Maps :</div> */}
                      {/* <div className="col-7 col-md-8"><a href={country.maps.googleMaps} target="_blank">Google Maps</a></div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardCountry;

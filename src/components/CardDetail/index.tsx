import React, { useEffect, useState } from "react";
import "./CardDetail.css";
import { useAppSelector } from "../../redux/hook";
import { Countries } from "../../interface/interface";
import { useParams, useNavigate } from "react-router-dom";
import TimeZone from "../TimeZone";
import { filterData } from "../../redux/action";


const CardDetail: React.FC = () => {
  const YOUR_API_KEY = "AIzaSyCFO5VfLatFEAay_HJ0lxf2H9fKfvgBq6U";
  const [isError, setIsError] = useState<boolean>(false);
  const { countries_name } = useParams<{ countries_name: string }>();
  const state = useAppSelector((state) => state.countriesData);
  const navigate = useNavigate();

  const countries = state.countries.filter((country: Countries) => {
    return country.name.common.toLowerCase() === countries_name?.toLowerCase();
  });

  // let map: google.maps.Map;
  // const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

  // function initMap(): void {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center,
  //     zoom: 8,
  //   });
  // }

  // useEffect(() => {
  //   initMap();
  // }, []);

  return (
    <>
      {countries.map((country: Countries, index: number) => {
        let frist: string = Object.keys(country.currencies)[0];
        console.log(frist);
        return (
          <div className="card card-detail" key={index}>
            <div className="card-body">
              <h2 className="text-center mb-4 mb-lg-5">Country details</h2>
              <div className="row g-md-4">
                <div className="col-md-6 text-center">
                  <img src={country.flags.png} className="img-fluid" alt={country.flags.alt} />
                </div>
                <div className="col-md-6">
                  <div className="row country-name">
                    <div className="col-4">
                      <h5>Country Name : </h5>
                    </div>
                    <div className="col-8">
                      <h5>{country.name.common}</h5>
                    </div>
                  </div>
                  <div className="country-name-mobile">
                    <h2>{country.name.common}</h2>
                  </div>
                  <div className="row g-1">
                    <div className="col-5 col-md-4">Country Code :</div>
                    <div className="col-7 col-md-8">{country.cca2}</div>
                    <div className="col-5 col-md-4">Region :</div>
                    <div className="col-7 col-md-8">{country.region}</div>
                    <div className="col-5 col-md-4">Sub-region :</div>
                    <div className="col-7 col-md-8">{country.subregion}</div>
                    <div className="col-5 col-md-4">Population :</div>
                    <div className="col-7 col-md-8">
                      {country.population.toLocaleString("en-US")} <i className="bi bi-people-fill ms-2"></i>
                    </div>
                    <div className="col-5 col-md-4">Area :</div>
                    <div className="col-7 col-md-8">
                      {country.area.toLocaleString("en-US")} km<sup>2</sup>
                    </div>
                    <div className="col-5 col-md-4">Currency :</div>
                    <div className="col-7 col-md-8">{Object.keys(country.currencies)[0]}</div>
                    <div className="col-5 col-md-4">Time :</div>
                    <div className="col-7 col-md-8">
                      <TimeZone timezone={country.timezones[0]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-detail-container mt-5">
                <h4>More details</h4>
                <div className="row">
                  <div className="col-lg-5"></div>
                  <div className="col-lg-7"></div>
                </div>
                <div className="content-detail">
                  <img src={country.coatOfArms.png} className="coatOfArms" alt="" />
                </div>
                <p>
                  <b>{country.name.common}</b>, officially the <b>{country.name.official}</b> is a country in{" "}
                  {country.subregion}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardDetail;

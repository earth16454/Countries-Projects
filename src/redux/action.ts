import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Countries } from "../interface/interface";
import { useAppSelector } from "./hook";

// export const fetchCountries = createAsyncThunk("fetchData", async () => {
//   const response = await axios.get<Countries[]>("https://restcountries.com/v3.1/all");
//   return response.data;
// });

export const fetchCountries = createAsyncThunk("fetchData", async () => {
  const response = await axios.get<Countries[]>("https://restcountries.com/v3.1/all");
  const dataAll = response.data.map((country) => {
    return {
      name: country.name,
      cca2: country.cca2,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      population: country.population,
      area: country.area,
      currencies: country.currencies,
      languages: country.languages,
      flags: country.flags,
      maps: country.maps,
      latlng: country.latlng,
      timezones: country.timezones,
      coatOfArms: country.coatOfArms,
    };
  });
  return dataAll;
});

// export const filterCountriesName = () => {
//   const filterData = createAction<Countries[] | undefined>('filterData');
//   let action = filterData();
// }

export const filterData = createAction("filterData", function prepare(countries: Countries[], text: string) {
  // console.log(countries);
  // console.log(text);

  let data = countries.filter((item: Countries) => {
    return item.name.common.toLowerCase().includes(text);
  });
  console.log(data);
  // dispatch(setFilterCountries(sum));

  return {
    payload: {
      data,
    },
  };
});

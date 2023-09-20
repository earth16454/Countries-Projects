import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Countries } from "../../interface/interface";
import { setFilterCountries } from "../../redux/reducers";
import { filterData } from "../../redux/action";

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countriesData);
  const { filterCountries } = useAppSelector((state) => state.countriesData);
  const [subregionState, setSubregionState] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchText = event.target.value.toLowerCase();
    let sum = countries.filter((item: Countries) => {
      return item.name.common.toLowerCase().includes(searchText);
    });
    console.log(sum);
    dispatch(setFilterCountries(sum));
  };

  const handleSearchRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    let value = event.target.value;
    let sum = countries.filter((item: Countries) => {
      return item.region.includes(value);
    });
    // console.log(sum);
    dispatch(setFilterCountries(sum));
    // setSubregionState()

    if (value) {
      let sum2 = subRegions.filter((subR: string) => {
        let sum3 = subR.split(" ");
        // console.log(sum3);
        if (sum3[1] === value) {
          console.log(sum3[1]);
          // let option = sum3[1]
          return sum3[1] === value;
        }
      });
      setSubregionState(sum2);
      console.log(sum2);
    }
  };

  const handleSearchSubRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let value = event.target.value;
    let sum = countries.filter((item: Countries) => {
      return item.subregion.includes(value);
    })
    setFilterCountries(sum);
  }

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0){
      // let temItems = selectedFilters.map((selected))
    } else {
      dispatch(setFilterCountries(countries));
    }
  }


  const optionsRegions = () => {
    const uniqueRegions = new Set<string>();

    countries.forEach((country) => {
      if (country.region) {
        uniqueRegions.add(country.region);
      }
    });
    const uniqueRegionsArray = Array.from(uniqueRegions);
    return uniqueRegionsArray;
  };

  const optionsSubRegions = () => {
    const uniqueSubRegions = new Set<string>();

    countries.forEach((country) => {
      if (country.region) {
        uniqueSubRegions.add(country.subregion);
      }
    });
    const uniqueSubRegionsArray = Array.from(uniqueSubRegions);
    return uniqueSubRegionsArray;
  };

  const regions = optionsRegions();
  const subRegions = optionsSubRegions();
  subRegions.pop();
  // setSubregionState(subRegions);

  return (
    <>
      <div className="header-container">
        <div className="row g-2 g-md-5">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="row align-items-center">
              <div className="col-4 col-auto">
                <label htmlFor="Region" className="form-label">
                  Region
                </label>
              </div>
              <div className="col-8 col-md">
                <select className="form-select" onChange={handleSearchRegion}>
                  <option selected>All</option>
                  {regions.map((region, index) => {
                    return (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="row align-items-center">
              <div className="col-4">
                <label htmlFor="Sub-region" className="form-label">
                  Sub-region
                </label>
              </div>
              <div className="col-8 col-md">
                <select className="form-select" onChange={handleSearchSubRegion}>
                  <option selected>All</option>
                  {/* {subRegions.map((subRegion, index) => {
                    return (
                      <option key={index} value={subRegion}>
                        {subRegion}
                      </option>
                    );
                  })} */}
                  {subregionState.map((subRegion, index) => {
                    return <option key={index} value={subRegion}>{subRegion}</option>
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="row align-items-center">
              <div className="col-4 col-md-auto">
                <label htmlFor="Countries" className="form-label">
                  Countries
                </label>
              </div>
              <div className="col-8 col-md">
                <div className="form-group has-search">
                  {/* <span className="fa fa-search form-control-feedback"></span> */}
                  <input type="text" className="form-control" placeholder="Search" onChange={handleSearchName} />
                  <span className="fa fa-search form-control-feedback"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

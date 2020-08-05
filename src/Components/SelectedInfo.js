import React from "react";

import { CountryInfo } from "./StyledComponents";
import { replaceHyphen, formatDate, addCommas } from "./helpers";

const SelectedInfo = ({ selectedCountry }) => {
  // console.log(selectedCountry);
  //Destructuring
  const { country, time, cases, deaths, tests } = selectedCountry;
  let { continent } = selectedCountry;
  //END OF Destructuring
  if (continent === null) {
    continent = "Others";
  } else {
    if (continent === "North-America") {
      continent = "North & Central America";
    }
  }
  return (
    <CountryInfo id="country-info">
      <h2 className="country-name">{replaceHyphen(country)}</h2>
      <p className="country-continent">{replaceHyphen(continent)}</p>
      <p className="updated">
        <b>Last update:</b> {formatDate(time)}
      </p>

      <div className="data-container">
        <div className="data-item">
          <span className="data-title">Confirmed</span>
          <h3 className="data-quantity purple">{addCommas(cases.total)}</h3>
        </div>

        <div className="data-item">
          <span className="data-title">Recovered</span>
          <h3 className="data-quantity green">
            {addCommas(cases.recovered)}
          </h3>
        </div>

        <div className="data-item">
          <span className="data-title">Active</span>
          <h3 className="data-quantity orange">{addCommas(cases.active)}</h3>
        </div>

        <div className="data-item">
          <span className="data-title">Deaths</span>
          <h3 className="data-quantity red">{addCommas(deaths.total)}</h3>
        </div>
      </div>

      <div className="data-container">
        <div className="data-item">
          <span className="data-title">Tests</span>
          <h3 className="data-quantity purple">{tests.total === null? "Not Available" : addCommas(tests.total)}</h3>
        </div>
      </div>
    </CountryInfo>
  );
};

export default SelectedInfo;

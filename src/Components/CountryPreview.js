import React from "react";
import { CountryPreviewItem } from "./StyledComponents";
import { replaceHyphen, addCommas, formatDate } from "./helpers";

const CountryPreview = ({ country, updateSelectedCountry }) => {

  const handleClick = () => {
    updateSelectedCountry(country);
  }

  return (
    <CountryPreviewItem
      className="country-link"
      title={country.country}
      onClick={handleClick}
    >
      <div className="min-card">
        <div className="header">
          <span className="name">{replaceHyphen(country.country)}</span>
          <span className="total-cases">{addCommas(country.cases.total)}</span>
        </div>
        <div className="body">
          <p>
            <b>Population: </b>
            {country.population? addCommas(country.population) : "Not available"}
          </p>
          <p>
            <b>Last update: </b>{formatDate(country.time)}
          </p>
        </div>
      </div>
    </CountryPreviewItem>
  );
};

export default CountryPreview;

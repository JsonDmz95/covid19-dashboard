import React from "react";
import { CountryPreviewItem } from "./StyledComponents";
import { replaceHyphen, addCommas, formatDate } from "./helpers";

const CountryPreview = ({ country }) => {
  // const updated = new Date(country.time);
  // console.log(updated.getDate());
  return (
    <CountryPreviewItem
      href="/#"
      className="country-link"
      title={country.country}
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

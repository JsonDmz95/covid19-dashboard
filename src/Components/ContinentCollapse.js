import React from "react";
import CountryPreview from "./CountryPreview";

import { CardHeader } from "./StyledComponents";
import { setHeight } from "./helpers";

const ContinentCollapse = ({
  countriesList,
  header,
  open,
  updateSelectedCountry,
}) => {
  setHeight();
  // console.log(countriesList);
  let idContinent;
  if (countriesList[0].continent === null) {
    idContinent = `others`;
  } else {
    idContinent = countriesList[0].continent.toLowerCase();
  }
  return (
    <div className="card">
      <CardHeader className="card-header">
        <a
          className="card-link"
          data-toggle="collapse"
          href={`#collapse-${idContinent}`}
          title={header}
        >
          {header}
        </a>
      </CardHeader>

      <div
        className={open ? "collapse show" : "collapse"}
        id={`collapse-${idContinent}`}
      >
        {countriesList.map((country) => (
          <CountryPreview
            key={country.country}
            country={country}
            updateSelectedCountry={updateSelectedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinentCollapse;

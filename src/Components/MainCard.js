import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import ContinentCollapse from "./ContinentCollapse";

import { axiosConfig } from "./helpers";
import { BigCard, Form } from "./StyledComponents";

const MainCard = () => {
  // States
  const [completeList, updateCompleteList] = useState([]);
  const [mapedList, updateMapedList] = useState([]);

  const [nortamericaList, updateNortamericaList] = useState([]);
  const [southamericaList, updateSouthamericaList] = useState([]);
  const [asiaList, updateAsiaList] = useState([]);
  const [africaList, updateAfricaList] = useState([]);
  const [europeList, updateEuropeList] = useState([]);
  const [oceaniaList, updateOceaniaList] = useState([]);
  const [othersList, updateOthersList] = useState([]);

  const [open, updateOpen] = useState(false);
  const [loading, updateLoading] = useState(true);

  // END OF States

  //Get all countries data
  useEffect(() => {
    const readAPI = async () => {
      const url = "https://covid-193.p.rapidapi.com/statistics";

      const response = await axios.get(url, axiosConfig);
      // console.log(response.data.response);
      updateCompleteList(response.data.response);
      updateMapedList(response.data.response);

      updateLoading(false);
    };
    readAPI();
  }, []);
  //END OF Get all countries data

  //Order country by continent
  useEffect(() => {
    updateNortamericaList(
      mapedList.filter((country) => country.continent === "North-America")
    );

    updateSouthamericaList(
      mapedList.filter((country) => country.continent === "South-America")
    );

    updateAsiaList(mapedList.filter((country) => country.continent === "Asia"));

    updateAfricaList(
      mapedList.filter((country) => country.continent === "Africa")
    );

    updateEuropeList(
      mapedList.filter((country) => country.continent === "Europe")
    );

    updateOceaniaList(
      mapedList.filter((country) => country.continent === "Oceania")
    );

    updateOthersList(mapedList.filter((country) => country.continent === null));
  }, [mapedList]);
  //END OF Order country by continent

  //When the user type on the serach field
  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "" || value.trim() === "") {
      updateMapedList(completeList);
      updateOpen(false);
    } else {
      updateMapedList(
        completeList.filter((country) =>
          country.country.toLowerCase().includes(value.toLowerCase())
        )
      );
      updateOpen(true);
    }
  };
  //END OF When the user type on the serach field

  //On enter
  const hadleSubmitt = (e) => {
    e.preventDefault();
  };
  // END OF on enter

  return (
    // <h2>Main Card goes here</h2>
    <BigCard>
      <div className="country-info"></div>
      <div className="searcher">
        <Form onSubmit={hadleSubmitt}>
          <input
            type="text"
            placeholder="Search Country"
            name="country"
            id="country"
            onChange={handleChange}
          />
        </Form>

        <div className="list-countries" id="list-countries">
          {loading ? <Spinner /> : null}

          <div id="continents-acordeon">
            {nortamericaList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={nortamericaList}
                header="North & Central America"
              />
            ) : null}

            {southamericaList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={southamericaList}
                header="South America"
              />
            ) : null}

            {africaList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={africaList}
                header="Arfica"
              />
            ) : null}

            {asiaList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={asiaList}
                header="Asia"
              />
            ) : null}

            {europeList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={europeList}
                header="Europe"
              />
            ) : null}

            {oceaniaList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={oceaniaList}
                header="Oceania"
              />
            ) : null}

            {othersList.length > 0 ? (
              <ContinentCollapse
                open={open}
                countriesList={othersList}
                header="Others"
              />
            ) : null}
          </div>
        </div>
      </div>
    </BigCard>
  );
};

export default MainCard;

import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import ContinentCollapse from "./ContinentCollapse";
import SelectedInfo from "./SelectedInfo";

import { axiosConfig, replaceSpace } from "./helpers";
import { BigCard, Form, EmptyMessage } from "./StyledComponents";
import HolderImg from "../img/holder.png";

const MainCard = () => {

  // Guaradar Consulta 
  let saved = JSON.parse(localStorage.getItem('search'));
  if(!saved){
    saved = "";
  }
  // END OF Guaradar Consulta 

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
  const [emptySearch, updateEmptySearch] = useState(false);

  const [selectedCountry, updateSelectedCountry] = useState({});

  const [memory, updateMemory] = useState(saved);
  // END OF States

  // Get last search 
  useEffect(() => {
    // let saved = JSON.parse(localStorage.getItem('search'));

    if(saved){
      localStorage.setItem('search', JSON.stringify(memory))
    }else{
      localStorage.setItem('search', JSON.stringify([]))
    }
  }, [memory, saved]);
  // END OF Get last search 

  //Get all countries data
  useEffect(() => {
    const readAPI = async () => {
      const url = "https://covid-193.p.rapidapi.com/statistics";

      const response = await axios.get(url, axiosConfig);
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
      updateEmptySearch(false);
    } else {
      updateMapedList(
        completeList.filter((country) =>
          country.country.toLowerCase().includes(replaceSpace(value).toLowerCase())
        )
      );
      updateOpen(true);
    }

    if (mapedList.length === 0) {
      updateEmptySearch(true);
    } else {
      updateEmptySearch(false);
    }
  };
  //END OF When the user type on the serach field

  //On enter
  const hadleSubmitt = (e) => {
    e.preventDefault();

    if (mapedList.length === 1) {
      updateSelectedCountry(mapedList[0]);

      // let field= document.getElementById("country")
      updateMemory(mapedList[0].country);
    }
  };
  // END OF on enter

  return (
    <BigCard>
      <div className="country-info">
        {Object.keys(selectedCountry).length === 0 ? 
          <img src={HolderImg} className="img-fluid d-block" alt="Holder"/>
        :  <SelectedInfo selectedCountry={selectedCountry}/>
        }
      </div>
      <div className="searcher">
        <Form onSubmit={hadleSubmitt}>
          <input
            type="text"
            placeholder="Search Country"
            name="country"
            id="country"
            onChange={handleChange}
            // value={memory}
          />
        </Form>

        <div className="list-countries" id="list-countries">
          {loading ? <Spinner /> : null}

          <div id="continents-acordeon">
            {nortamericaList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={nortamericaList}
                header="North & Central America"
              />
            ) : null}

            {southamericaList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={southamericaList}
                header="South America"
              />
            ) : null}

            {africaList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={africaList}
                header="Africa"
              />
            ) : null}

            {asiaList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={asiaList}
                header="Asia"
              />
            ) : null}

            {europeList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={europeList}
                header="Europe"
              />
            ) : null}

            {oceaniaList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={oceaniaList}
                header="Oceania"
              />
            ) : null}

            {othersList.length > 0 ? (
              <ContinentCollapse
                updateSelectedCountry={updateSelectedCountry}
                open={open}
                countriesList={othersList}
                header="Others"
              />
            ) : null}

            {emptySearch ? (
              <EmptyMessage>
                Your search did not match any result :(
              </EmptyMessage>
            ) : null}
          </div>
        </div>
      </div>
    </BigCard>
  );
};

export default MainCard;

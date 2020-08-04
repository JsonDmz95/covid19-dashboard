import React, {useState, useEffect} from 'react';
import axios from "axios";

import {axiosConfig} from "./helpers";

import { BigCard, Form } from "./StyledComponents";

const MainCard = () => {
  // States
  const [completeList, updateCompleteList]= useState([]);

  const [nortamericaList, updateNortamericaList] = useState([]);
  const [southamericaList, updateSouthamericaList] = useState([]);
  const [asiaList, updateAsiaList] = useState([]);
  const [africaList, updateAfricaList] = useState([]);
  const [europeList, updateEuropeList] = useState([]);
  const [oceaniaList, updateOceaniaList] = useState([]);
  const [otrhersList, updateOthersList] = useState([]);
  
  // END OF States

  //Get all countries data
  useEffect(() => {
    const readAPI = async () => {
      const url = "https://covid-193.p.rapidapi.com/statistics";

    const response = await axios.get(url, axiosConfig);
    // console.log(response.data.response);
    updateCompleteList(response.data.response);
    }; 
    readAPI();
  }, []);
  //END OF Get all countries data

  //Order country by continent
  useEffect(() => {
    updateNortamericaList(
      completeList.filter(country => country.continent === "North-America")
    );
    
    updateSouthamericaList(
      completeList.filter(country => country.continent === "South-America")
    );

    updateAsiaList(
      completeList.filter(country => country.continent === "Asia")
    );

    updateAfricaList(
      completeList.filter(country => country.continent === "Africa")
    );

    updateEuropeList(
      completeList.filter(country => country.continent === "Europe")
    );

    updateOceaniaList(
      completeList.filter(country => country.continent === "Oceania")
    );

    updateOthersList(
      completeList.filter(country => country.continent === null)
    );

  }, [completeList]);
  //END OF Order country by continent

  return (
    // <h2>Main Card goes here</h2>
    <BigCard>
      <div className="country-info"></div>
      <div className="searcher">
        <Form>
          <input type="text" placeholder="Search Country"/>
        </Form>
      </div>
    </BigCard>
  );
}
 
export default MainCard;
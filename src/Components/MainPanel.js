import React, { useState, useEffect } from "react";
import axios from "axios";

import GlobalTrends from "./GlobalTrends";
import MainCard from "./MainCard";
import {axiosConfig} from "./helpers";

import Spinner from "./Spinner";
import { MainTitle } from "./StyledComponents";

const MainPanel = () => {
  // States
  const [globalData, updateGlobalDate] = useState({});
  // END OF States

  // Consul global data
  useEffect(() => {
    const readApi = async () => {
      const url = "https://covid-193.p.rapidapi.com/statistics?country=all";

      const response = await axios.get(url, axiosConfig);
      updateGlobalDate(response.data.response[0]);
    };

    readApi();
  }, []);
  // END OF Consul global data

  return (
    <div className="main-panel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <MainTitle className="main-title">
              <b>COVID-19</b> Global Trends
            </MainTitle>
          </div>
        </div>
      </div>

      <div className="container-fluid main-conatiner">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-9 data-col">
            {Object.keys(globalData).length === 0 ? 
              <Spinner />
            : <GlobalTrends globalData={globalData}/>}
            
            <MainCard />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;

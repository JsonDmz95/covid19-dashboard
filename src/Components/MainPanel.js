import React, { useState, useEffect } from "react";
import axios from "axios";

import GlobalTrends from "./GlobalTrends";
import Spinner from "./Spinner";
import { MainTitle } from "./StyledComponents";

const MainPanel = () => {
  // States
  const [globalData, updateGlobalDate] = useState({});
  // END OF States

  // Consultar datos globales
  useEffect(() => {
    const readApi = async () => {
      const url = "https://covid-193.p.rapidapi.com/statistics?country=all";

      const axiosConfig = {
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":  "f9bc729bcdmshcecd66d04dcdc1bp199240jsn92860f4865ca"
        }
      };

      const response = await axios.get(url, axiosConfig);
      updateGlobalDate(response.data.response[0]);
    };

    readApi();
  }, []);
  // END OF Consultar datos globales

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

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-9">
            {Object.keys(globalData).length === 0 ? 
              <Spinner />
            : <GlobalTrends globalData={globalData}/>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;

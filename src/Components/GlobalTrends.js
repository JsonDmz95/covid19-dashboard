import React from 'react';
import SmallCard from "./SmallCard"

const GlobalTrends = ({globalData}) => {
  // console.log(globalData);
  return (
    <div className="cards-container">
      <SmallCard 
        cardTitle="Confirmed"
        cardQuantity={globalData.cases.total}
        cardColor='purple'
      />
      <SmallCard 
        cardTitle="Recovered"
        cardQuantity={globalData.cases.recovered}
        cardColor='green'
      />
      <SmallCard 
        cardTitle="Actives"
        cardQuantity={globalData.cases.active}
        cardColor='orange'
      />
      <SmallCard 
        cardTitle="Deaths"
        cardQuantity={globalData.deaths.total}
        cardColor='red'
      />
    </div>
  );
}
 
export default GlobalTrends;
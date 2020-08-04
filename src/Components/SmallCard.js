import React from 'react';

import {GolbalCard} from "./StyledComponents"
import {addCommas} from "./helpers"

const SmallCard = ({cardTitle, cardQuantity, cardColor}) => {
  return (
    <GolbalCard className={cardColor}>
      <h2>Global {cardTitle}</h2>
      <p>{addCommas(cardQuantity)}</p>
    </GolbalCard>
  );
}
 
export default SmallCard;
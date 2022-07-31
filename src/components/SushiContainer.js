import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({currentSushi,currentMoney, onMoreSushi, moneyRemain}) {

  const sushiToDisplay = currentSushi
  
  return (
    <div className="belt">
      { sushiToDisplay.map(sushi => { return <Sushi key={sushi.id} sushiData={sushi} currentMoney={currentMoney} moneyRemain={moneyRemain}/> }) }
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;

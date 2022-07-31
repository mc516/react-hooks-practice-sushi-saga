import React, { useState } from "react";

function Sushi( {sushiData, moneyRemain, currentMoney} ) {
  const {id, name, img_url, price, created_at} = sushiData
  const [isEaten, setIsEaten] = useState(false)

  function handleIsEatenToggle() {
    if(currentMoney < price) {
      return true
    }
    setIsEaten(true)
    moneyRemain(price)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsEatenToggle}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

import React from "react";

function MoreButton( {onMoreSushi} ) {

  function onMoreSushiClick(event) {
    onMoreSushi(event)
  }
  
  return <button onClick={onMoreSushiClick}>More sushi!</button>;
}

export default MoreButton;

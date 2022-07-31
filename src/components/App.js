import React, { useState,useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMoney, setCurrentMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushiList(data))
  }, [])

  const currentSushi = sushiList.slice(0, 4)
 
  function handleMoreSushi(event) {
    let newIndex = currentIndex + 4
    setCurrentIndex(newIndex)
    setSushiList(sushiList.slice(newIndex, newIndex + 4))
  }

  function handleMoneyRemaining(cost) {
    if(currentMoney < 0 || currentMoney < cost ) {
      return true
    }
    setCurrentMoney(currentMoney => currentMoney - cost)
  }

  return (
    <div className="app">
      <SushiContainer sushiData={sushiList} currentSushi={currentSushi} onMoreSushi={handleMoreSushi} currentMoney={currentMoney} moneyRemain={handleMoneyRemaining}/>
      <Table currentMoney={currentMoney}/>
    </div>
  );
}

export default App;

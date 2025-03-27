import React, { useState } from "react";

export default function App() {
  const [scoreWidth,setScoreWidth] = useState('40%');
  const [scoreColor,setScoreColor] = useState("rgb(255,0,0)");

  function onChangeFunctions(e){
    if(e.target.value >= 0 && e.target.value <= 10){
      getScoreWidth(e);
      getScoreColor(e);
    }
  }

  function getScoreWidth(e) {
    let width = (parseInt(e.target.value) * 10) + '%';
    setScoreWidth(width);
  }

  function getScoreColor(e) {
    let red = 255 - (e.target.value * 25.5);
    let green = e.target.value * 25.5;
    setScoreColor("rgb("+ parseInt(red) + "," + parseInt(green) + ",0)")
  }

  const getScoreBarStyle = () => {
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={onChangeFunctions}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';

import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

const trafficLightConfig = [
  { color: 'red', delay: 4000 , message: "STOP"},
  { color: 'yellow', delay: 500 , message: "GO"},
  { color: 'green', delay: 3000 , message: "WAIT"},
];

const colorSequence = ['red', 'yellow', 'green'];

function Light({ activeIndex, color }) {
  let activeLight = trafficLightConfig[activeIndex];
  return <div style={{ background: activeLight.color === color ? color : 'black' }} className="light-container"
   >{ activeLight.color === color ? activeLight.message : ""}</div>
}

const App = () => {
  const [activeIndex, setActiveindex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveindex((activeIndex + 1) % trafficLightConfig.length);
    }, trafficLightConfig[activeIndex].delay);
    return () => clearTimeout(timer);
  }, [activeIndex]);
  return (
    <>
      <div className="App"> 
        <h1 className="text-xl font-bold my-5">Traffic Light</h1>
        <div className="traffic-light-container rounded-full">
          {colorSequence.map(color => {
            return <Light key={color} color={color} activeIndex={activeIndex} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;

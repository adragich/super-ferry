import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from "react";
import * as ReactDOM from 'react-dom';

function App() {
  const DELAY = 1500;
  // const [top, setTop] = React.useState(Math.floor(Math.random() * 100))
  // const [left, setLeft] = React.useState(Math.floor(Math.random() * 75))
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [topDirection, setTopDirection] = useState(1)
  const [leftDirection, setLeftDirection] = useState(1)
  const MAX_WIDTH = window.innerWidth;
  const MAX_HEIGHT = window.innerHeight;
  const ELEMENT_HEIGHT = 100;
  const ELEMENT_WIDTH = 100;

  function changePosition(number = 200) {
    const newPositionX = (Math.floor(Math.random() * number) + 100) * leftDirection;
    const newPositionY = (Math.floor(Math.random() * number) + 100) * topDirection;

    if (top + ELEMENT_HEIGHT + newPositionY - MAX_HEIGHT >= 0) {
      setTopDirection(-1);
    } else if (top - ELEMENT_HEIGHT + newPositionY <= 0) {
      setTopDirection(1);
    } else {
      
    }

    if (left + ELEMENT_WIDTH + newPositionX - MAX_WIDTH >= 0) {
      setLeftDirection(-1);
    } else if (left - ELEMENT_WIDTH + newPositionX <= 0) {
      setLeftDirection(1);
    }

    setTop(top + newPositionY)
    setLeft(left + newPositionX)
  }

  useEffect(() => {
    const interval = setInterval(changePosition, DELAY);

    return () => clearInterval(interval)
  });

  return (
    <div className="box-drift">
      <div 
        id='ferry'
        className="box-bob"
        style={{
          transform: `translate(${left}px, ${top}px)`,
          transition: `${DELAY}ms cubic-bezier(0.31, 0.51, 0.54, 1.29) 0s`,
        }}
      >
        <div className="box-pitch">
          <div className="left-sail"></div>
          <div className="right-sail"></div>
          <div className="hull"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

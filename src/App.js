import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from "react";
import * as ReactDOM from 'react-dom';

function App() {
  const [top, setTop] = React.useState(Math.floor(Math.random() * 100))
  const [left, setLeft] = React.useState(Math.floor(Math.random() * 75))

  function changePosition(number = 5) {
    const newPositionX = Math.floor(Math.random() * number);
    const newPositionY = Math.floor(Math.random() * number);
    setTop(top + newPositionY)
    setLeft(left + newPositionX)
  }

  useEffect(() => {
    const interval = setInterval(changePosition, 150);
    return () => clearInterval(interval)
  }, []);

  return (
    <div>{top}, {left}
      <div id='ferry' style={{
        transform: `translate(${top}px, ${left}px)`
      }}>Ferry</div>
      <div id='ferry' style={{
        transform: `translate(${top}px, ${left}px)`
      }}>Ferry</div>
    </div>
  );
}

export default App;

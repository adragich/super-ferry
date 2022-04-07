import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from "react";
import * as ReactDOM from 'react-dom';

function App() {
  const [top, setTop] = React.useState(Math.floor(Math.random() * 100))
  const [left, setLeft] = React.useState(Math.floor(Math.random() * 75))
  const [width, setWidth] = React.useState(1000) //x
  const [height, setheight] = React.useState(1000) //y

  function changePosition(number = 5) {
    const newPositionX = Math.floor(Math.random() * number);
    const newPositionY = Math.floor(Math.random() * number);
    if (top !== width) {
      setTop(top + newPositionY)
    } else {
      setTop(top - newPositionY)
    }

    if (left !== height) {
      setLeft(left + newPositionX)
    } else {
      setLeft(left - newPositionX)
    }
  }

  useEffect(() => {
    const interval = setInterval(changePosition, 10);
    return () => clearInterval(interval)
  });

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

// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import './App.css';  // Import the CSS file
import TimerInput from './TimerInput';
import TimerDisplay from './ForTimerDisplay';
import TimerControls from './TheTimerController';

const App = () => {
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setRemainingTime(time);
  };

  const handleTimeChange = (value) => {
    setTime(value);
    setRemainingTime(value);
  };

  return (
    <div className="container">
      <h2>Welcome to Paul Nonz</h2>
      <h1>Count-down Timer</h1>
      
      <br />
      <TimerInput time={time} onTimeChange={handleTimeChange} />
      <TimerDisplay remainingTime={remainingTime} />
      <TimerControls onStart={handleStart} onPause={handlePause} onReset={handleReset} />
    </div>
  );
};

export default App;

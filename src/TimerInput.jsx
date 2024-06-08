// src/TimerInput.jsx
import React from 'react';

const TimerInput = ({ time, onTimeChange }) => {
  const handleChange = (event) => {
    onTimeChange(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label>Set Timer: </label>
      <input type="number" value={time} onChange={handleChange} />
    </div>
  );
};

export default TimerInput;

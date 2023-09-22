import React, { useState } from 'react';
const Counter = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);

  const onStart = () => {
    const t = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    setIsRunning(true);
    setTimer(t);
  };

  const onPause = () => {
    setIsRunning(false);
    if (timer) {
      clearInterval(timer);
      setTimer(0);
    }
  };

  const onReset = () => {
    onPause();
    setTime(0);
  };

  return (
    <div>
      <h2>{time}</h2>
      {isRunning ? (
        <div>
          <button onClick={onPause}>Pause</button>
          <button onClick={onReset}>Reset</button>
        </div>
      ) : (
        <button onClick={onStart}>Start</button>
      )}
    </div>
  );
};

export default Counter;
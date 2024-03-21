import React, { useState, useEffect } from "react";
import "../style/global.css";
import StopWatchIcon from "../Images/StopWatchIcon.png";

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopWatch">
      <img src={StopWatchIcon} alt="stopWatchIcons" />
      <p>{formatTime(elapsedTime)}</p>
    </div>
  );
}

export default Stopwatch;

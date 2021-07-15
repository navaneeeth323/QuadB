import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const timerProps = {
    isPlaying: true,
    size: 35,
    strokeWidth: 6
}

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div className="container">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            {...timerProps}
            isPlaying
            duration={60}
            colors={[["#3DC6C1", 0.33],["#3DC6C1"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        
      </div>
      );
    }
  
    return (
      <div className="timer">
        <div className="text"></div>
        <div className="value">{remainingTime}</div>
        <div className="text"></div>
      </div>
    );
  };
  
 const Timer = () => {
    return (
      <div className="container">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            {...timerProps}
            isPlaying
            duration={60}
            colors={[["#3DC6C1", 0.33],["#3DC6C1"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        
      </div>
    );
  }

  export default Timer;
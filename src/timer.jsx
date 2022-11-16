import React from "react";

// react component to show the timer
export const Timer = ({ time }) => {
  return (
    <div className="timer">
      <div className="text">Time Remaining</div>
      <div className="value">{time}</div>
      <div className="text">seconds</div>
    </div>
  );
};

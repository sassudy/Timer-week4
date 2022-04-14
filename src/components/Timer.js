import React from "react";

function Timer() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, getTime] = React.useState(currentTime);

  function updateTime() {
    const timeNow = new Date().toLocaleTimeString();
    getTime(timeNow);
  }
  setInterval(updateTime, 1000);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Timer;

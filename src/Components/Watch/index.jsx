import React, { useState, useEffect } from "react";

function Watch({ userName }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  return (
    <>
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <span>{`Bom dia ${userName}`}</span>
    </>
  );
}
export default Watch;

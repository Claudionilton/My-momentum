import React, { useState, useEffect } from "react";

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  //Transformar as constantes em Objeto

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const day = formatTime(time.getDay() + 1);
  const month = formatTime(time.getMonth() + 1);
  const year = formatTime(time.getFullYear());

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  return (
    <>
      <div className="hour">
        {hours}:{minutes}:{seconds} <br />
        {day}/{month}/{year}
      </div>
    </>
  );
}
export default Watch;

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

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  const fullDate = {
    hours: formatTime(time.getHours()),
    minutes: formatTime(time.getMinutes()),
    seconds: formatTime(time.getSeconds()),
    day: formatTime(time.getDay() + 1),
    month: formatTime(time.getMonth() + 1),
    year: formatTime(time.getFullYear() + 1),
  };
  //console.log(fullDate.hours);

  // const hours = formatTime(time.getHours());
  // const minutes = formatTime(time.getMinutes());
  // const seconds = formatTime(time.getSeconds());
  // const day = formatTime(time.getDay() + 1);
  // const month = formatTime(time.getMonth() + 1);
  // const year = formatTime(time.getFullYear());

  return (
    <>
      <div className="hour">
        {fullDate.hours}:{fullDate.minutes}:{fullDate.seconds} <br />
        {fullDate.day}/{fullDate.month}/{fullDate.year}
      </div>
    </>
  );
}
export default Watch;

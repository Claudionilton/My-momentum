const Watch = ({ userName }) => {
  setInterval(() => {
    let date = new Date();
    let dateHour = date.getHours();
    let dateMin = date.getMinutes();
    let dateSec = date.getSeconds();

    hour.innerText = `${formatTime(dateHour)}`;
    min.innerText = `${formatTime(dateMin)}`;
    sec.innerText = `${formatTime(dateSec)}`;
  }, 1000);

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  return (
    <div>
      <div className="flex justify-center text-[48px] font-bold absolute inset-0 place-items-center">
        <span id="hour">00</span>
        <span>:</span>
        <span id="min">00</span>
        <span>:</span>
        <span id="sec">00</span>
      </div>
      <hr />
      <span>{`Bom dia ${userName}`}</span>
    </div>
  );
};

export default Watch;

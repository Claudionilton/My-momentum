const Body = () => {
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
    <div className=" text-blue-600 h-screen w-screen p-6  rounded-sm relative">
      <img
        src="https://picsum.photos/200/300"
        alt="image"
        height="536"
        width="354"
      />
      <div className="flex justify-center text-2xl absolute inset-0 place-items-center">
        <span id="hour">00</span>
        <span>:</span>
        <span id="min">00</span>
        <span>:</span>
        <span id="sec">00</span>
      </div>
    </div>
  );
};

export default Body;

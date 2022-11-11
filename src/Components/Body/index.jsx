import { useEffect } from "react";

const Body = (props) => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  return (
    <div className="h-screen w-screen p-6 bg-purple-400 rounded-sm ">
      {props.children}
      <div className="relative h-32 w-32">{time}</div>
      <div className="relative h-50 w-50">{date}</div>
    </div>
  );
};

export default Body;

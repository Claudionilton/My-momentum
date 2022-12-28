import Card from "../Card";
import Watch from "../Watch";
import Button from "../Button";

const Body = ({}) => {
  function Click() {
    console.log("oi");
  }

  return (
    <div
      className=" text-blue-600 h-screen w-screen p-6  rounded-sm relative"
      style={{
        backgroundImage: "url('https://picsum.photos/1920')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Watch />
      <Card />
    </div>
  );
};

export default Body;

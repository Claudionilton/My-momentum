import Card from "../Card";
import Watch from "../Watch";

const Body = () => {
  return (
    <div
      className=" text-blue-600 h-screen w-screen p-6  rounded-sm relative"
      style={{
        backgroundImage: "url('https://picsum.photos/1920')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Watch userName="Claudionilton" />
      <Card> TESTE</Card>
    </div>
  );
};

export default Body;

import Todo from "../Todo";
import Watch from "../Watch";
import "../../index.css";
import Git from "../FetchGit";

const Body = () => {
  return (
    <div
      className="body text-blue-600 "
      style={{
        backgroundImage: "url('https://picsum.photos/1920')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="gitCard">
        <Git />
      </div>
      <div className="watch">
        <Watch />
      </div>

      <div className="todoAlign">
        <Todo />
      </div>
    </div>
  );
};

export default Body;

import Button from "../Button";
import Todo from "./Todo";

const Card = ({}) => {
  return (
    <>
      <h1 className="">Todo List</h1>

      <div className="todo">
        <input type="text" placeholder="Add todo" />
        <Button className=" button addButton" name="✚" type="button" />
      </div>
      <div className="card p-4">
        <div class="btn"></div>
        <Todo />
      </div>
    </>
  );
};

export default Card;

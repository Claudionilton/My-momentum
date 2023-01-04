import "../../index.css";
import React, { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, item]);
    setItem("");
  }

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleRemove(index) {
    const newTasks = [...items];
    newTasks.splice(index, 1);
    setItems(newTasks);
  }

  return (
    <div className="todo">
      <div className="add">
        <form onSubmit={handleSubmit}>
          <button type="submit">✅</button>

          <input
            className="textAreaToDo"
            type="text"
            value={item}
            placeholder=" Add To Do"
            onChange={handleChange} //onClick
          />
        </form>
      </div>
      <div className="remove">
        <ul>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <button type="button" onClick={() => handleRemove(index)}>
                  <div className="closeToDo">{`❌ `}</div>
                </button>
                <span> </span>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

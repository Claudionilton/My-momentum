import "../../index.css";
import React, { useState } from "react";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";

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
      <div>
        <ul>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <div className="col-md-5">
                  <ClayCard className="bg-color:#fff">
                    <ClayCard.Body>
                      <ClayButton onClick={() => handleRemove(index)}>
                        ❌
                      </ClayButton>
                      <span> </span>
                      {item}
                    </ClayCard.Body>
                  </ClayCard>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

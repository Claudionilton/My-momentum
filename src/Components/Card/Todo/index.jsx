// import Button from "../../Button";

// const Todo = () => {
//   return (
//     <>
//       <Button className="   button" name="✅" type="button" />
//       <Button className="   button" name="❌" type="button" />
//     </>
//   );
// };

import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleRemove(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Task ✅</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button type="button" onClick={() => handleRemove(index)}>
              Remove ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

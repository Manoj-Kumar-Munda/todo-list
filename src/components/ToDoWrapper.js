import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";

const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos([
      ...toDos,
      {
        id: uuidv4(),
        task: todo,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };
  console.log(toDos);
  return (
    <div className="wrapper">
      <div className="title">
        <h1 className="heading">ToDo App</h1>
      </div>
      <div className="content">
        <ToDoForm addToDo={addToDo} />
        <div className="task-section">
          {toDos.length === 0
            ? null
            : toDos.map((item) => {
                return (
                  <ToDo
                    key={uuidv4()}
                    toggleComplete={toggleComplete}
                    data={item}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ToDoWrapper;

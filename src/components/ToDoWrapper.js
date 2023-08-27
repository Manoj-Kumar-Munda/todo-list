import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { nanoid } from "nanoid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";

const ToDoWrapper = () => {
  
  const [toDos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos([
      ...toDos,
      {
        id: nanoid(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    console.log("Inside delete task");
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const editTask = (id) => {
    console.log("Edit task called");
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const updateTask = (id, editedTask) => {
    console.log("Inside updateTask");
    setToDos(
      toDos.map( (todo) => todo.id === id ? {
        ...todo,
        task : editedTask,
        isEditing : false,
      } : todo)
    )
  }

  const toggleComplete = (id) => {
    console.log("inside toggleComplte");
    setToDos(
      toDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  console.log(toDos);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#010101]">
      <div className="flex-1 max-w-xl">
        <div className="flex flex-col gap-4 rounded-2xl border-[1px] border-violet-600">
          <div className="bg-violet-700 py-4 rounded-t-xl">
            <h1 className="text-center font-bold text-lg text-gray-100">
              To-do-list App
            </h1>
          </div>

          <div className="px-4">
            <ToDoForm addToDo={addToDo} />

            <div className="my-4 rounded-lg">
              {toDos.length === 0 ? (
                <h1 className="text-white text-center">No task available</h1>
              ) : (
                <div className="flex flex-col bg-white">
                  {toDos.map((item) => 
                    (item.isEditing) ? (
                      <EditToDoForm task={item} updateTask = {updateTask} key={item?.id} />
                    ) : (
                      <ToDo
                        task={item}
                        key={item?.id}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        editTask={editTask}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoWrapper;

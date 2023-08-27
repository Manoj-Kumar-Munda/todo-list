import React from "react";

const ToDo = ({task, toggleComplete, deleteTask, editTask}) => {
    console.log("Inside ToDo");
  return (
    <>
      <div className="flex justify-between items-center py-2 px-2 border-b">
        <span 
          className={ task.completed ? "cursor-pointer [text-decoration:line-through]": "cursor-pointer"}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </span>

        <div className="space-x-2">
          <button 
            className="border px-4 py-1 font-semibold border-violet-600 rounded-lg"
            onClick={() => editTask(task.id)}
          >
            Edit
          </button>
          <button 
            className="border px-4 py-1 font-semibold border-violet-600 rounded-lg"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;

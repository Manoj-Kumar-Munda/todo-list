import React, { useState } from "react";

const ToDoForm = ({addToDo}) => {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDo(input);
        setInput("");
    }
  return (
    <>
      <form className="flex focus-within:ring-4 ring-violet-700 rounded-lg" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-sm w-full py-3 pl-3 outline-none rounded-lg rounded-r-none "
        />
        <button className=" bg-white rounded-r-lg px-2 border-l-2" type="submit">
          <span className="text-violet-500 font-bold text-sm whitespace-nowrap">Add Task</span>
        </button>
      </form>
    </>
  );
};

export default ToDoForm;


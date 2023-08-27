import React, { useState } from 'react'

const EditToDoForm = ({task, updateTask}) => {
    console.log("Inside EditToDoForm");
    const [input, setInput] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task.id, input );

    }
  return (
    <>
    <form className="flex rounded-lg" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-sm w-full py-3 pl-3 outline-none rounded-lg rounded-r-none"
        autoFocus = "true"
      />
      <button className=" bg-white rounded-r-lg px-2 border-l-2" type="submit">
        <span className="text-violet-500 font-bold text-sm whitespace-nowrap">Update Task</span>
      </button>
    </form>
  </>
  )
}

export default EditToDoForm
import React, { useState } from "react";

const ToDoForm = ({addToDo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
    setValue("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-element">
        <input
          className="form-input"
          type="text"
          placeholder={`What's in your task today...`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;

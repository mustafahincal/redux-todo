import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
const Form = () => {
  const [title, setTitle] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(addTodo({ id: nanoid(), title, completed: false }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default Form;

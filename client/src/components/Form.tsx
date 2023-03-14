import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todos/services";
const Form = () => {
  const [title, setTitle] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await dispatch(addTodoAsync({ title })); // only send the title to the action, not the whole object because the action will create the id and completed properties
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        // disabled={isLoading}
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

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleActive } from "../redux/todos/todosSlice";
import { Todo } from "../types/Todo";

const TodoList = () => {
  const { items } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (item: Todo) => {
    if (window.confirm("are you sure about that?")) dispatch(deleteTodo(item));
  };
  return (
    <ul className="todo-list">
      {items.map((item: Todo) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              onChange={() => dispatch(toggleActive(item))}
              className="toggle"
              type="checkbox"
              checked={item.completed}
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDeleteTodo(item)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

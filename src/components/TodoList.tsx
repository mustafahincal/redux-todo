import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleActive } from "../redux/todos/todosSlice";
import { Todo } from "../types/Todo";

let filtered: Todo[] = [];
const TodoList = () => {
  const { items, activeFilter } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (item: Todo) => {
    if (window.confirm("are you sure about that?")) dispatch(deleteTodo(item));
  };

  if (activeFilter !== "all") {
    filtered = items.filter((todo: Todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  } else {
    filtered = items;
  }

  return (
    <ul className="todo-list">
      {filtered.map((item: Todo) => (
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

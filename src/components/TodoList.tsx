import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  selectFilteredTodoItems,
  toggleActive,
} from "../redux/todos/todosSlice";
import { Todo } from "../types/Todo";

// let filteredTodos :Todo[] = [];
const TodoList = () => {
  // const { items, activeFilter } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = useSelector(selectFilteredTodoItems);

  const handleDeleteTodo = (item: Todo) => {
    if (window.confirm("are you sure about that?")) dispatch(deleteTodo(item));
  };

  /* if (activeFilter !== "all") {
    filteredTodos = items.filter((todo: Todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  } else {
    filteredTodos = items;
  } */

  return (
    <ul className="todo-list">
      {filteredTodos.map((item: Todo) => (
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

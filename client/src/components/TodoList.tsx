import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  deleteTodoAsync,
  getTodosAsync,
  toggleTodoAsync,
} from "../redux/todos/services";
import { selectFilteredTodoItems } from "../redux/todos/todosSlice";
import { Todo } from "../types/Todo";
import Error from "./Error";
import Loading from "./Loading";

// let filteredTodos :Todo[] = [];
const TodoList = () => {
  // const { items, activeFilter } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch<AppDispatch>();
  const filteredTodos: Todo[] = useSelector(selectFilteredTodoItems);
  const handleDeleteTodo = (item: Todo) => {
    if (window.confirm("are you sure about that?"))
      dispatch(deleteTodoAsync(item.id));
  };

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const isLoading = useSelector((state: any) => state.todos.isLoading);
  const error = useSelector((state: any) => state.todos.error);
  let test = useSelector((state: any) => state.todos.test);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <ul className="todo-list">
      {filteredTodos.map((item: Todo) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              onChange={() =>
                dispatch(
                  toggleTodoAsync({ id: item.id, completed: !item.completed })
                )
              }
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

import { useDispatch, useSelector } from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";
import { Todo } from "../types/Todo";

const ContentFooter = () => {
  const items = useSelector((state: any) => state.todos.items);
  const activeFilter = useSelector((state: any) => state.todos.activeFilter);
  const dispatch = useDispatch();
  const itemsLeft = items.filter((item: Todo) => !item.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "seledted" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "seledted" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "seledted" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;

import { useSelector } from "react-redux";

const TodoList = () => {
  const { items } = useSelector((state: any) => state.todos);
  console.log(items);
  return (
    <ul className="todo-list">
      {items.map((item: any) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

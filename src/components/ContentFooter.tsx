const ContentFooter = () => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{"2"}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={"all"}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={"active"}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" className={"selected"}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ContentFooter;

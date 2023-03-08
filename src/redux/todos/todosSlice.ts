import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/Todo";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn javascript",
        completed: true,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleActive: (state, action) => {
      const { id } = action.payload;
      const item: Todo | undefined = state.items.find((item) => item.id === id);
      if (item) {
        item.completed = !item.completed;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const filteredTodos: Todo[] = state.items.filter(
        (item) => item.id !== id
      );
      state.items = filteredTodos;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item: Todo) => !item.completed);
      state.items = filtered;
    },
  },
});

export const selectTodoItems = (state: any) => state.todos.items;
export const selectActiveFilter = (state: any) => state.todos.activeFilter;
export const selectFilteredTodoItems = (state: any) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo: Todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};
export const {
  addTodo,
  toggleActive,
  deleteTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;

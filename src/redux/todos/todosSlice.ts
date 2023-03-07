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
  },
});
export const { addTodo, toggleActive, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

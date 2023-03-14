import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/Todo";
import {
  addTodoAsync,
  deleteTodoAsync,
  getTodosAsync,
  toggleTodoAsync,
} from "./services";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [] as Todo[],
    activeFilter: "all" as string,
    isLoading: false as boolean,
    error: null as string | null,
    test: "test" as string,
  },
  reducers: {
    //* we don't need this anymore because we use createAsyncThunk
    /* addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }: any): any => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            title,
          },
        };
      },
    }, */
    /* toggleActive: (state, action) => {
      const { id } = action.payload;
      const item: Todo | undefined = state.items.find((item) => item.id === id);
      if (item) {
        item.completed = !item.completed;
      }
    }, */
    /* deleteTodo: (state, action) => {
      const { id } = action.payload;
      const filteredTodos: Todo[] = state.items.filter(
        (item) => item.id !== id
      );
      state.items = filteredTodos;
    }, */
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item: Todo) => !item.completed);
      state.items = filtered;
    },
  },
  extraReducers: {
    //* getTodosAsync
    [getTodosAsync.pending.toString()]: (state: any, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled.toString()]: (state: any, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected.toString()]: (state: any, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //* addTodoAsync
    [addTodoAsync.fulfilled.toString()]: (state: any, action) => {
      state.items.push(action.payload);
    },
    [addTodoAsync.rejected.toString()]: (state: any, action) => {
      state.error = action.error.message;
    },
    //* toggleTodoAsync
    [toggleTodoAsync.fulfilled.toString()]: (state: any, action) => {
      const { id, completed } = action.payload;
      const item: Todo | undefined = state.items.find(
        (item: Todo) => item.id === id
      );
      if (item) {
        item.completed = completed;
      }
    },
    [toggleTodoAsync.rejected.toString()]: (state: any, action) => {
      state.error = action.error.message;
    },
    //* deleteTodoAsync
    [deleteTodoAsync.fulfilled.toString()]: (state: any, action) => {
      state.items = action.payload;
    },
    [deleteTodoAsync.rejected.toString()]: (state: any, action) => {
      state.error = action.error.message;
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
export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;

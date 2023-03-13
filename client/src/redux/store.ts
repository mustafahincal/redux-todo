import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos,
  },
});

// this is the type of the store because it errors out when I try to use it in the component
export type AppDispatch = typeof store.dispatch;

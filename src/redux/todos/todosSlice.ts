import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "Learn javascript",
        completed: true,
      },
      {
        id: 2,
        title: "Read a book",
        completed: false,
      },
    ],
  },
  reducers: {},
});
export const {} = todosSlice.actions;
export default todosSlice.reducer;

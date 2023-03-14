import { createAsyncThunk } from "@reduxjs/toolkit";
export const getTodosAsync: any = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:4000/todos");
    return await response.json();
  }
);
export const addTodoAsync: any = createAsyncThunk(
  "todos/addTodoAsync",
  async (data: any) => {
    // with axios;
    // const response = await axios.post("http://localhost:4000/todos", todo);
    // return response.data;

    // with fetch
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
);
export const toggleTodoAsync: any = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, completed }: any) => {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });
    return await response.json();
  }
);
export const deleteTodoAsync: any = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id: string) => {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
);

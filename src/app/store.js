import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const saveLocal = (state) => {
  try {
    const atLocal = JSON.stringify(state.todos.todoList);
    localStorage.setItem("userData", atLocal);
  } catch (e) {
    console.warn(e);
  }
};

export const store = configureStore(
  {
    reducer: {
      todos: todoReducer,
    },
  }
);

store.subscribe(() => saveLocal(store.getState()));

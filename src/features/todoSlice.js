import { createSlice } from "@reduxjs/toolkit";

// const [todoList,setTodoList] = useState([]);

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done = !item.done;
        }
      });
    },

    deleteTodo: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done) {
            state.todoList = state.todoList.filter(
              (item) => item.id !== action.payload
            );
          } else {
            item.err = !item.err;
          }
        }
      });
    },

    hideNotification: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.err = false;
        }
      });
    },
  },
});

export const { saveTodo, setCheck, deleteTodo, hideNotification } =
  todoSlice.actions;

export const selectTodosList = (state) => state.todos.todoList;
export const notifyer = (state) => state.err;

export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// const [todoList,setTodoList] = useState([]);

const initialState = {
  todoList: [],
  err: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      state.err = false;
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done = !item.done;
          state.err = false;
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
            state.err = !state.err;
          }
        }
        return "its not Done"
      });
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions;

export const selectTodosList = (state) => state.todos.todoList;
export const notifyer = (state) => state.err;

export default todoSlice.reducer;

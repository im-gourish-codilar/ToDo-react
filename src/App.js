import Input from "./components/input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodosList } from "./features/todoSlice";

import "./App.scss";

function App() {
  const todoList = useSelector(selectTodosList);

  const len = todoList.length;

  return (
    <div className="App">
      <h1>TO DO List</h1>
      <Input />
      <div className="app_container">
        {len === 0 ? (
          <h2 className="notodos">No ToDo's Here !</h2>
        ) : (
          <div className="app_todoContainer">
            {todoList.map((item, k) => (
              <TodoItem key={k} props={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

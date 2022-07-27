import React, { useEffect, useState } from "react";
import Input from "./components/input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodosList } from "./features/todoSlice";

import "./App.scss";

function App() {
  const todoList = useSelector(selectTodosList);

  // const [notify, setNotify] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotify(false);
  //   }, 3000);
  // }, []);

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

      {/* if user click  delete todo if  not done notify this 
      {notify ? <h6>this is not done</h6> : <></>} */}
    </div>
  );
}

export default App;

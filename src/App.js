import React, { useEffect, useState } from "react";
import Input from "./components/input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodosList } from "./features/todoSlice";

import "./App.css";

function App() {
  const todoList = useSelector(selectTodosList);

  // const [notify, setNotify] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotify(false);
  //   }, 3000);
  // }, []);

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((item, k) => (
            <TodoItem key={k} props={item} />
          ))}
        </div>
      </div>

      {/* if user click  delete todo if  not done notify this 
      {notify ? <h6>this is not done</h6> : <></>} */}

      <Input />
    </div>
  );
}

export default App;

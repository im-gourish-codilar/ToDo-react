import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

import "./input.scss";
const Input = () => {
  const [input, setInput] = useState("");
  const [nothing, setNothing] = useState("Enter a ToDo");
  const dispatch = useDispatch();

  const setVal = (e) => {
    setInput(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    if ( input.length === 0 || input.trim().length === 0 ) {
      setInput("");
      setNothing("Enter a  valid ToDo...");
    } else if ( input.length > 160 ) {
      alert("Chareacters length is exceded ! ");
    } else {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
          err: false,
        })
      );
      setInput("");
      setNothing("Enter a ToDo");
    }
  };

  return (
    <form className="input-box">
      <input
        type="text"
        onChange={setVal}
        value={input}
        placeholder={nothing}
      />
      <button onClick={addToDo}> Add </button>
    </form>
  );
};

export default Input;

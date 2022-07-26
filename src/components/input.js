import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

import "./input.css";
const Input = () => {
  const [input, setInput] = useState("");
  const [nothing, setNothing] = useState("");
  const dispatch = useDispatch();

  const setVal = (e) => {
    setInput(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    if (input.length === 0 || input.trim().length === 0) {
      setInput("");
      setNothing("Enter a  valid ToDo...");
    } else {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
      setInput("");
      setNothing("");
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

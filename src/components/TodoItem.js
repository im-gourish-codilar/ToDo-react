import React from "react";
import Deleteicon from "../media/Delete.icon";

import "./TodoItem.scss";

import { useDispatch } from "react-redux";
import { deleteTodo, setCheck, hideNotification } from "../features/todoSlice";

const TodoItem = ({ props }) => {
  const dispatch = useDispatch();
  const { item, done, id, err } = props;

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const notify = (id) => {
    setTimeout(() => {
      dispatch(hideNotification(id));
    }, 300);
  };

  const deleteIt = () => {
    dispatch(deleteTodo(id));
    notify(id);
  };

  return (
    <div className={`todo-item ${err ? "notify" : ""}`}>
      <label className={` check ${done ? "strike" : "bold"}`} htmlFor={id}>
        <input
          type="checkbox"
          checked={done}
          id={id}
          className="inputBox"
          onChange={handleCheck}
        />
        <span className={err ? "notDone" : ""}>{item}</span>
      </label>
      <button type="checkbox" onClick={deleteIt}>
        <Deleteicon />
      </button>
    </div>
  );
};

export default TodoItem;

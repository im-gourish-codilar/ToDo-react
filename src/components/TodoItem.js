import React from "react";
import Deleteicon from "../media/Delete.icon";

import "./TodoItem.scss";

import { useDispatch } from "react-redux";
import { deleteTodo, setCheck } from "../features/todoSlice";

const TodoItem = ({ props }) => {
  let res;
  const dispatch = useDispatch();
  const { item, done, id } = props;

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const deleteIt = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-item">
      <label className={done ? "check strike" : "check bold"} htmlFor={id}>
        <input type="checkbox" checked={done} id={id} className="inputBox" onChange={handleCheck} />
        {item}
      </label>
      <button type="checkbox" onClick={deleteIt}>
        <Deleteicon />
      </button>
      {/* <span>{res}</span> */}
    </div>
  );
};

export default TodoItem;

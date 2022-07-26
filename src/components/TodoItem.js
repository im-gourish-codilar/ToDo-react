import React from "react";
import "./TodoItem.css";

import { useDispatch } from "react-redux";
import { deleteTodo, setCheck } from "../features/todoSlice";

const TodoItem = ({ props }) => {
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
      <input type="checkbox" checked={done} id={id} onChange={handleCheck} />
      <label className={done ? "strike" : "bold"} for={id} >{item}</label>
      <button type="checkbox" onClick={deleteIt}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;

import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

import * as _condition from "../redux/constant";
import * as _fn from '../redux/function';

function Tabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const allTodos = useSelector(state => state.todos);
  const todayTodos = allTodos?.filter(todo => {
    const condition = _fn.handleConditionByDate(todo.date);
    if (condition === _condition.TODAY) {
      return todo;
    }
  });
  const completeTodos = allTodos?.filter(todo => {
    return todo.isComplete === true;
  });

  return (
    <nav className="shadow-lg">
      <li
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => navigate("/")}
      >
        Semua ({allTodos?.length})
      </li>

      <li
        className={location.pathname === "/today" ? "active" : ""}
        onClick={() => navigate("/today")}
      >
        Hari Ini ({todayTodos?.length})
      </li>

      <li
        className={location.pathname === "/complete" ? "active" : ""}
        onClick={() => navigate("/complete")}
      >
        Selesai ({completeTodos?.length})
      </li>
    </nav>
  );
}

export default Tabs;

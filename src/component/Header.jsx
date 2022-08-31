import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as _condition from "../redux/constant";
import * as _fn from '../redux/function';
import Time from './Time';
import "./styles.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const allTodos = useSelector(state => state.todos);
  const temp = allTodos?.filter(todo => {
    const condition = _fn.handleConditionByDate(todo.date);
    if (condition === _condition.TODAY) {
      return todo;
    }
  })
  const todayTodos = [...temp];
  const completeTodos = allTodos?.filter(todo => {
    return todo.isComplete === true;
  });

  return (
    <header className="mt-3">
      <div className="datetime px-sm-5 py-3 px-3 d-flex align-items-center justify-content-between flex-wrap">
        <h4><i className="fas fa-calendar-alt me-2"></i>{_fn.locale_date}</h4>
        <Time />
      </div>
      <div className="p-sm-5 px-3 py-5">
        <div className="d-flex align-items-start justify-content-between flex-wrap">
          <div>
            <h1>Pengelola Tugas</h1>
            <p>Catat tugas harianmu disini!</p>
          </div>
          <button className="btn btn-light mt-4 mt-sm-0" onClick={() => navigate("/addtodo")}>Tambah tugas</button>
        </div>
      </div>
      <nav className="shadow-lg">
        <li className={location.pathname === "/" ? "active" : ""}
          onClick={() => navigate("/")}>Semua ({allTodos?.length})</li>

        <li className={location.pathname === "/today" ? "active" : ""}
          onClick={() => navigate("/today")}>Hari Ini ({todayTodos?.length})</li>

        <li className={location.pathname === "/complete" ? "active" : ""}
          onClick={() => navigate("/complete")}>Selesai ({completeTodos?.length})</li>
      </nav>
    </header>
  )
}

export default Header
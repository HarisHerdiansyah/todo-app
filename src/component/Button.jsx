import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as _action from "../redux/slice";
import * as _fn from '../redux/function';

export function Toggle({ data }) {
  const dispatch = useDispatch();

  function toggleHandler(payload) {
    dispatch(_action.toggleComplete(payload));
    _fn.COMPLETE_ALERT(payload);
  }

  return (
    <button
      className={data.isComplete ? "btn btn-primary" : "btn btn-success"}
      onClick={() => toggleHandler(data)}
    >
    {data.isComplete ? "Kembalikan" : "Tandai Selesai"}
    {data.isComplete ? <i className="fas fa-undo ms-2"></i> : <i className="fas fa-check ms-2"></i>}
    </button>
  )
}

export function Edit({ pathParams }) {
  const navigate = useNavigate();

  return (
    <button className="btn btn-warning" onClick={() => navigate(`/edittodo/${pathParams}`)}>
      Edit
      <i className="fas fa-edit ms-2"></i>
    </button>
  );
}

export function Delete({ data }) {
  const dispatch = useDispatch();

  function deleteHandler(payload) {
    dispatch(_action.deleteTodo(payload.id));
    _fn.DELETE_ALERT();
  }

  return (
    <button 
      className="btn btn-danger" 
      onClick={() => deleteHandler(data)}
    >
      Hapus
      <i className="fas fa-trash-alt ms-2"></i>
    </button>
  );
}

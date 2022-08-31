import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as _action from '../redux/slice';
import * as _condition from "../redux/constant";
import * as _fn from '../redux/function';
import * as Button from '../component/Button';
import TaskList from '../component/TaskList';

function CompleteTodo() {
  const completeTodos = useSelector(state => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="accordion" id="accordionTodo">
      <section className="accordion-item shadow">
        <h4 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + _condition.COMPLETE} aria-expanded="true" aria-controls={_condition.COMPLETE}>
            Selesai
          </button>
        </h4>
        <div className="accordion-collapse collapse show" id={_condition.COMPLETE} data-bs-parent="accordionTodo">
          <div className="accordion-body card card-body">
            <ul>
              {
                completeTodos?.map((todo, i) => {
                  if (todo.isComplete) {
                    return (
                      <>
                        <TaskList
                          key={todo.id}
                          activity={todo.activity}
                          status="Selesai"
                          description={todo.description}
                          date={_fn.locale_date}
                          time={todo.time}
                        />
                        <div className="d-flex gap-sm-3 gap-2 my-3 flex-wrap" key={i}>
                          {
                            todo.isComplete ?
                              <Button.Complete toggle={() => _fn.completeTodo(dispatch(_action.toggleComplete(todo)), _condition.COMPLETE_ALERT(todo))} /> :
                              <Button.Uncomplete toggle={() => _fn.completeTodo(dispatch(_action.toggleComplete(todo)), _condition.COMPLETE_ALERT(todo))} />
                          }
                          <Button.Edit edit={() => navigate("/edittodo/" + todo.id)} />
                          <Button.Delete delete={() => _fn.onDeleteTodo(dispatch(_action.deleteTodo(todo.id)), _condition.DELETE_ALERT())} />
                        </div>
                        <hr />
                      </>
                    )
                  }
                })
              }
            </ul>
          </div>
        </div>
      </section>


    </div>
  )
}

export default CompleteTodo;
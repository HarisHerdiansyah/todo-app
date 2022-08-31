import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as _action from '../redux/slice';
import * as _condition from "../redux/constant";
import * as _fn from '../redux/function';
import * as Button from '../component/Button';
import TodoSection from '../component/TodoSection';
import TaskList from '../component/TaskList';

function AllTodo() {
  const allTodos = useSelector(state => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <main className="mb-5 accordion accordion-flush" id="accordionTodo">
      <TodoSection typeCollapse={_condition.YESTERDAY} label="Kemarin" parent="accordionTodo">
        {
          allTodos?.map((todo, i) => {
            const condition = _fn.handleConditionByDate(todo.date);
            if (condition === _condition.YESTERDAY) {
              return (
                <>
                  <TaskList
                    key={todo.id}
                    activity={todo.activity}
                    status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                    description={todo.description}
                    date={todo?.date?.join("-")}
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
      </TodoSection>
      <TodoSection typeCollapse={_condition.TODAY} label="Hari ini" parent="accordionTodo">
        {
          allTodos?.map((todo, i) => {
            const condition = _fn.handleConditionByDate(todo.date);
            if (condition === _condition.TODAY) {
              return (
                <>
                  <TaskList
                    key={todo.id}
                    activity={todo.activity}
                    status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                    description={todo.description}
                    date={todo?.date?.join("-")}
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
      </TodoSection>
      <TodoSection typeCollapse={_condition.TOMORROW} label="Besok" parent="accordionTodo">
        {
          allTodos?.map((todo, i) => {
            const condition = _fn.handleConditionByDate(todo.date);
            if (condition === _condition.TOMORROW) {
              return (
                <>
                  <TaskList
                    key={todo.id}
                    activity={todo.activity}
                    status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                    description={todo.description}
                    date={todo?.date?.join("-")}
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
      </TodoSection>
      <TodoSection typeCollapse={_condition.THREE_NEXT_DAY} label="Minggu ini" parent="accordionTodo">
        {
          allTodos?.map((todo, i) => {
            const condition = _fn.handleConditionByDate(todo.date);
            if (condition === _condition.THREE_NEXT_DAY) {
              return (
                <>
                  <TaskList
                    key={todo.id}
                    activity={todo.activity}
                    status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                    description={todo.description}
                    date={todo?.date?.join("-")}
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
      </TodoSection>
      <TodoSection typeCollapse={_condition.NEXT_WEEK} label="Minggu depan" parent="accordionTodo">
        {
          allTodos?.map((todo, i) => {
            const condition = _fn.handleConditionByDate(todo.date);
            if (condition === _condition.NEXT_WEEK) {
              return (
                <>
                  <TaskList
                    key={todo.id}
                    activity={todo.activity}
                    status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                    description={todo.description}
                    date={todo?.date?.join("-")}
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
      </TodoSection>
      <TodoSection typeCollapse={_condition.SOON} label="Waktu yang akan datang" parent="accordionTodo">
        {
          allTodos?.map((todo, i) => {
            const condition = _fn.handleConditionByDate(todo.date);
            if (condition === _condition.SOON) {
              return (
                <>
                  <TaskList
                    key={todo.id}
                    activity={todo.activity}
                    status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                    description={todo.description}
                    date={todo?.date?.join("-")}
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
      </TodoSection>
    </main>
  )
}

export default AllTodo;
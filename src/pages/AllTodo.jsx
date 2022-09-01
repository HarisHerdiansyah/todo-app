import React from "react";
import { useSelector } from "react-redux";

import * as _condition from "../redux/constant";
import * as _fn from "../redux/function";
import TodoSection from "../component/TodoSection";
import TaskList from "../component/TaskList";
import ButtonSection from "../component/ButtonSection";

function AllTodo() {
  const allTodos = useSelector((state) => state.todos);

  return (
    <main className="mb-5 accordion accordion-flush" id="accordionTodo">
      <TodoSection
        typeCollapse={_condition.YESTERDAY}
        label="Kemarin"
        parent="accordionTodo"
      >
        {allTodos?.map(todo => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.YESTERDAY) {
            return (
              <>
                <TaskList
                  keyID={todo.id}
                  activity={todo.activity}
                  status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                  description={todo.description}
                  date={todo?.date?.join("-")}
                  time={todo.time}
                />
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
      <TodoSection
        typeCollapse={_condition.TODAY}
        label="Hari ini"
        parent="accordionTodo"
      >
        {allTodos?.map(todo => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.TODAY) {
            return (
              <>
                <TaskList
                  keyID={todo.id}
                  activity={todo.activity}
                  status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                  description={todo.description}
                  date={todo?.date?.join("-")}
                  time={todo.time}
                />
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
      <TodoSection
        typeCollapse={_condition.TOMORROW}
        label="Besok"
        parent="accordionTodo"
      >
        {allTodos?.map(todo => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.TOMORROW) {
            return (
              <>
                <TaskList
                  keyID={todo.id}
                  activity={todo.activity}
                  status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                  description={todo.description}
                  date={todo?.date?.join("-")}
                  time={todo.time}
                />
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
      <TodoSection
        typeCollapse={_condition.THREE_NEXT_DAY}
        label="Minggu ini"
        parent="accordionTodo"
      >
        {allTodos?.map(todo => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.THREE_NEXT_DAY) {
            return (
              <>
                <TaskList
                  keyID={todo.id}
                  activity={todo.activity}
                  status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                  description={todo.description}
                  date={todo?.date?.join("-")}
                  time={todo.time}
                />
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
      <TodoSection
        typeCollapse={_condition.NEXT_WEEK}
        label="Minggu depan"
        parent="accordionTodo"
      >
        {allTodos?.map(todo => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.NEXT_WEEK) {
            return (
              <>
                <TaskList
                  keyID={todo.id}
                  activity={todo.activity}
                  status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                  description={todo.description}
                  date={todo?.date?.join("-")}
                  time={todo.time}
                />
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
      <TodoSection
        typeCollapse={_condition.SOON}
        label="Waktu yang akan datang"
        parent="accordionTodo"
      >
        {allTodos?.map(todo => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.SOON) {
            return (
              <>
                <TaskList
                  keyID={todo.id}
                  activity={todo.activity}
                  status={todo.isComplete ? "Selesai" : "Sedang berjalan"}
                  description={todo.description}
                  date={todo?.date?.join("-")}
                  time={todo.time}
                />
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
    </main>
  );
}

export default AllTodo;

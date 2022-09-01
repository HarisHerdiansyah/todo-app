import React from 'react';
import { useSelector } from 'react-redux';

import * as _condition from "../redux/constant";
import * as _fn from "../redux/function";
import TodoSection from "../component/TodoSection";
import TaskList from "../component/TaskList";
import ButtonSection from "../component/ButtonSection";

function TodayTodo() {
  const dataTodos = useSelector(state => state.todos);

  return (
    <div className="accordion" id="accordionTodo">
      <TodoSection
        typeCollapse={_condition.TODAY}
        label="Hari Ini"
        parent="accordionTodo"
      >
        {dataTodos?.map((todo) => {
          const condition = _fn.handleConditionByDate(todo.date);
          if (condition === _condition.TODAY) {
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
                <ButtonSection keyID={todo.id} dataTodos={todo} />
                <hr />
              </>
            );
          }
        })}
      </TodoSection>
    </div>
  )
}

export default TodayTodo
import React from "react";
import { useSelector } from "react-redux";

import * as _condition from "../redux/constant";
import * as _fn from "../redux/function";
import TodoSection from "../component/TodoSection";
import TaskList from "../component/TaskList";
import ButtonSection from "../component/ButtonSection";

function CompleteTodo() {
  const dataTodos = useSelector((state) => state.todos);

  return (
    <div className="accordion" id="accordionTodo">
      <TodoSection
        typeCollapse={_condition.COMPLETE}
        label="Selesai"
        parent="accordionTodo"
      >
        {dataTodos?.map((todo) => {
          if (todo.isComplete) {
            return (
              <>
                <TaskList
                  key={todo.id}
                  activity={todo.activity}
                  status="Selesai"
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
    </div>
  );
}

export default CompleteTodo;

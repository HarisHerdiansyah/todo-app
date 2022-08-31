import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const indexData = state.todos.findIndex((todo) => {
        return todo.id === action.payload;
      });
      state.todos.splice(indexData, 1);
    },
    editTodo: (state, action) => {
      const indexData = state.todos.findIndex(todo => {
        return todo.id === action.payload.id;
      });
      state.todos[indexData] = action.payload;
    },
    toggleComplete: (state, action) => {
      const indexData = state.todos.findIndex(todo => {
        return todo.id === action.payload.id;
      });
      state.todos[indexData].isComplete = !action.payload.isComplete;
    }
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } = todosSlice.actions;
const todosReducer = todosSlice.reducer;
export default todosReducer;

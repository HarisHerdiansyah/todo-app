import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './redux/store';
import Header from './component/Header';
import AllTodo from './pages/AllTodo';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import TodayTodo from './pages/TodayTodo';
import CompleteTodo from './pages/CompleteTodo';

function TodoApp() {
  const _persistor = persistStore(store);

  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={_persistor}>
        <main className="container pb-5">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<AllTodo />} />
              <Route path="/addtodo" element={<AddTodo />} />
              <Route path="/edittodo/:id" element={<EditTodo />} />
              <Route path="/today" element={<TodayTodo />} />
              <Route path="/complete" element={<CompleteTodo />} />
            </Routes>
          </BrowserRouter>
        </main>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

export default TodoApp;
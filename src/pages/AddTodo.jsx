import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import * as _action from '../redux/slice';

function AddTodo() {
  const dispatch = useDispatch();
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function submitTodo(e) {
    e.preventDefault();
    dispatch(_action.addTodo({ id: nanoid(), activity, description, date: date.split("-"), time, isComplete: false }));

    setActivity("");
    setDescription("");
    dateRef.current.value = "";
    timeRef.current.value = "";

    Swal.fire("Tugas ditambahkan!", "Berhasil menambahkan tugas!", "success");
  }

  return (
    <div className="my-5">
      <h1>Tambah tugas</h1>
      <form onSubmit={e => submitTodo(e)}>
        <div className="form-floating my-3">
          <input type="text" name="activity" className="form-control" id="floatingInput"
            value={activity}
            onChange={e => setActivity(e.target.value)}
          />
          <label htmlFor="floatingInput">Judul Tugas</label>
        </div>

        <div className="form-floating my-3">
          <textarea name="description" className="form-control" id="floatingInput" style={{ height: "250px" }}
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="floatingInput">Deskripsi (opsional)</label>
        </div>

        <div className="row my-3">
          <div className="col-6">
            <input type="date" name="date" className="form-control" required
              onChange={e => setDate(e.target.value)}
              ref={dateRef}
            />
          </div>

          <div className="col-6">
            <input type="time" name="time" className="form-control" required
              onChange={e => setTime(e.target.value)}
              ref={timeRef}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-dark">Tambah</button>
      </form>
    </div>
  )
}

export default AddTodo;
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import * as _action from '../redux/slice';

function EditTodo() {
  const dispatch = useDispatch();
  const params = useParams();
  const todoId = params.id;

  const entryTodo = useSelector(state => {
    return state.todos.filter(todo => todo.id === todoId);
  });

  const dateRef = useRef(null);
  const [activity, setActivity] = useState(entryTodo[0].activity);
  const [description, setDescription] = useState(entryTodo[0].description);
  const [time, setTime] = useState(entryTodo[0].time);

  function updateTodo(e) {
    e.preventDefault();
    dispatch(_action.editTodo({ id: entryTodo[0].id, activity, description, date: dateRef.current.value.split("-"), time, isComplete: entryTodo[0].isComplete }));

    setActivity("");
    setDescription("");
    dateRef.current.value = "";
    setTime("");

    Swal.fire("Tugas diubah!", "Berhasil mengubah tugas!", "success");
  }

  useEffect(() => {
    dateRef.current.value = entryTodo[0].date?.join("-");
  }, [entryTodo]);

  return (
    <div className="my-5">
      <h1>Edit tugas</h1>
      <form onSubmit={e => updateTodo(e)}>
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
              onChange={e => dateRef.current.value = e.target.value}
              ref={dateRef}
            />
          </div>

          <div className="col-6">
            <input type="time" name="time" className="form-control" required
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-dark">Edit</button>
      </form>
    </div>
  )
}

export default EditTodo;
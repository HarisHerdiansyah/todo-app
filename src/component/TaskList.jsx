import React from 'react';

function TaskList(props) {
  return (
    <>
      <p>{props.status}</p>
      <li>
        <h4 className="mb-5">{props.activity}</h4>
        <article>
          <h5>Deskripsi tugas :</h5>
          <p>{props.description}</p>
        </article>
        <div className="row my-5 text-capitalize">
          <div className="col-md-5 mb-2">
            <h5><i className="fas fa-calendar-alt me-sm-2"></i>{props.date}</h5>
          </div>
          <div className="col-md-4">
            <h5><i className="fas fa-clock me-sm-2"></i>{props.time}</h5>
          </div>
        </div>
      </li>
    </>
  )
}

export default TaskList;
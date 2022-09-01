import React from 'react';

function TaskList({ status, activity, description, date, time, keyID }) {
  return (
    <li key={keyID}>
      <p>{status}</p>
      <div>
        <h4 className="mb-5">{activity}</h4>
        <article>
          <h5>Deskripsi tugas :</h5>
          <p>{description}</p>
        </article>
        <div className="row my-5 text-capitalize">
          <div className="col-md-5 mb-2">
            <h5><i className="fas fa-calendar-alt me-sm-2"></i>{date}</h5>
          </div>
          <div className="col-md-4">
            <h5><i className="fas fa-clock me-sm-2"></i>{time}</h5>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TaskList;
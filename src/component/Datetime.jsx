import React, { useEffect, useState } from 'react';
import * as _fn from '../redux/function';

function Datetime() {
  const [jam, setJam] = useState(new Date());

  let intervalJam = null;

  useEffect(() => {
    intervalJam = setInterval(() => {
      setJam(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalJam);
    }
  }, []);

  return (
    <div className="datetime px-sm-5 py-3 px-3 d-flex align-items-center justify-content-between flex-wrap">
      <h4><i className="fas fa-calendar-alt me-2"></i>{_fn.locale_date}</h4>
      <h4><i className="fas fa-clock me-2"></i>{jam.toLocaleTimeString()}</h4>
    </div>
  );
}

export default Datetime;

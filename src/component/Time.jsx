import React, { useEffect, useState } from 'react';

function Time() {
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
    <h4><i className="fas fa-clock me-2"></i>{jam.toLocaleTimeString()}</h4>
  )
}

export default Time;
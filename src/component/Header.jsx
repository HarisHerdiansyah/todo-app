import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as _condition from "../redux/constant";
import * as _fn from '../redux/function';
import Datetime from "./Datetime";
import Tabs from './Tabs';
import "./styles.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="mt-3 mb-2">
      <Datetime />
      <div className="p-sm-5 px-3 py-5">
        <div className="d-flex align-items-start justify-content-between flex-wrap">
          <div>
            <h1>Pengelola Tugas</h1>
            <p>Catat tugas harianmu disini!</p>
          </div>
          <button className="btn btn-light mt-4 mt-sm-0" onClick={() => navigate("/addtodo")}>Tambah tugas</button>
        </div>
      </div>
      <Tabs />
    </header>
  )
}

export default Header;
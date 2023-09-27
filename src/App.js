import React from "react"
import './App.css';
import Home from "./routes/Home"

import { Route, Routes } from "react-router-dom";
import EmployeeList from "./routes/EmployeeList";

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/EmployeeList" element = {<EmployeeList/>} />    
      </Routes>
      </>
    </div>
  );
}

export default App;

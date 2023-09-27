import React from 'react'

import  "./NavbarStyles.css"
import {Link} from "react-router-dom"


const Navbar = () => {


  return (
    <div className = "header">
      <Link className = "header-style" to = "/">
        <h1 >Home</h1>
      </Link>
      <ul>
        <h1>
            <Link to="/EmployeeList" className = "header-style">Employee List</Link>
        </h1>
      </ul>
    </div>
  )
}

export default Navbar

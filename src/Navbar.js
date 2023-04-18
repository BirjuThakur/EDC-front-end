import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/"></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">home</NavLink>
              </li>
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/stage1">stage1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/stage2">stage2</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/stage3">stage3</NavLink>
              </li>
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/sinup">sinup</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/sinin">sinin</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/logout">logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
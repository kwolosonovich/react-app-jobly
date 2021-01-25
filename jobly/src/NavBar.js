import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";
import "./style/Navbar.css"

function NavBar() {

  return (
    <div>
      <Navbar>
        <NavLink exact to="/" className="navbar">
          Jobly
        </NavLink>
        <Nav className="link" navbar>
          <NavLink exact name="jobs" to="/jobs" className="navbar">
            Jobs
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact name="companies" to="/companies" className="navbar">
            Companies
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact name="profile" to="/profile" className="navbar">
            Profile
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact name="login" to="/login" className="navbar">
            Login
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact name="logout" to="/logout" className="navbar">
            Logout
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar
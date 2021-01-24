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
          <NavLink exact to="/jobs" className="navbar">
            Jobly
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact to="/companies" className="navbar">
            Companies
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact to="/profile" className="navbar">
            Profile
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact to="/login" className="navbar">
            Login
          </NavLink>
        </Nav>
        <Nav className="link" navbar>
          <NavLink exact to="/logout" className="navbar">
            Logout
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar
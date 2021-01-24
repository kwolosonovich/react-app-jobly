import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

function AppBar() {
    
    return (
      <div>
        <Navbar>
					<NavLink exact to="/" className="navbar">
							Jobs
					</NavLink>
					<NavLink exact to="/" className="navbar">
							Companies
					</NavLink>
					<NavLink exact to="/" className="navbar">
							Profile
					</NavLink>
					<NavLink exact to="/" className="navbar">
							Login
					</NavLink>
					<NavLink exact to="/" className="navbar">
							Logout
					</NavLink>
        </Navbar>
      </div>
    );
}

export default AppBar
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink to="/home" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/newitemform" style={linkStyles}>
        New Item Form
      </NavLink>
      <NavLink to="/currentpackinglist" style={linkStyles}>
        Current Packing List
      </NavLink>
    </div>
  );
}

export default NavBar;

//NavLinks for Home, New Item Form, Current Packing List

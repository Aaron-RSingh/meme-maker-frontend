import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Make A Meme!</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </div>
  );
};

export default NavBar;

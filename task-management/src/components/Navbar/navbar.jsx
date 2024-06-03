import React from "react";
import './navbar.css';  //Adding CSS for Navbar
import Home from '../../pages/Home/home'; //Connecting Home Page to Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="nav-links">
            <a href={Home}>Home</a>
          </div>
        </nav>
    )
}

export default Navbar;
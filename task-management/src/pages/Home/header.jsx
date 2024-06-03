import React from "react";
import './home.css';

const Header = () => {
    return (
        <div className="header">
        <div className="head">
            <div className="head-text">
             <h1>Task<br/>Management App</h1>
            </div>
            <div className="head-image">
                <img src="/about-img.png" alt="Header-Image" height={'500px'}/>
            </div>
        </div>
        </div>
    )
}

export default Header;
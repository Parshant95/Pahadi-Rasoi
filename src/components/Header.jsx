import React from 'react';
import logo from "../assets/Pahadi_rasoi.png";
function Header() {
  return (
    <div className="header">

        <div className="logo">
            <img src={logo}></img>
        </div>
        <div className="nav-item">  
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
}
export default Header;
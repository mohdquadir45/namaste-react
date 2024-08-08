
import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  const [login, setLogin] = useState("login");

  const onlineStatus = useOnlineStatus()


  const handleClick = () => {
   return login === 'login' ? setLogin("logout") : setLogin("login")
 }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status : {onlineStatus ? "✅" : "🔴" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={handleClick}>{login}</button>
          </ul>
        </div>
      </div>
    );
  };
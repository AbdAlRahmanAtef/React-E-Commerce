import React from "react";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link className="logo" to="/">
            <img src={ Logo} alt="logo"/>
          </Link>
          <ul className="links">
            <li>
              <Link to="/" className="link btn">
                Home
              </Link>
            </li>
            <li>
              <Link className="link btn" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

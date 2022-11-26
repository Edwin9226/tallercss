import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import krugerstar from "../img/krugerstar.png";

const Navbar = () => {
  let activeClassName = "active";
  return (
    <>
      <div
        style={{
          display: "flex",
          background: "white",
          padding: "5px 0 5px 5px",
          fontSize: "10px",
        }}
      >
        <div style={{ margin: "15px", fontSize: "7px" }}>
          <NavLink
            to="/"
            className={({ isActive }) => ({
              color: isActive ? activeClassName : undefined,
            })}
          >
            Home
          </NavLink>
        </div>
        <div style={{ margin: "15px", fontSize: "7px" }}>
          <NavLink
            to="/imc"
            className={({ isActive }) => ({
              color: isActive ? activeClassName : undefined,
            })}
          >
            IMC Calculator
          </NavLink>
        </div>
        <div style={{ margin: "15px", fontSize: "7px" }}>
          <NavLink
            to="/age"
            className={({ isActive }) => ({
              color: isActive ? activeClassName : undefined,
            })}
          >
            Age Calculator
          </NavLink>
        </div>
        <div className="brand-name" style={{ margin: "15px" }}>
          <img className="img" src={krugerstar} alt="KrugerStart" ></img> 
        </div>
        <div className="brand-name" style={{ left: "5px", fontSize: "12px",  top: "1005px"}}>
          KrugerStart
        </div>
        <div style={{ margin: "15px", fontSize: "7px" }}>
          <NavLink
            to="/clock"
            className={({ isActive }) => ({
              color: isActive ? activeClassName : undefined,
            })}
          >
            My Clock
          </NavLink>
        </div>
        <div style={{ margin: "15px", fontSize: "7px" }}>
          <NavLink
            to="/about"
            className={({ isActive }) => ({
              color: isActive ? activeClassName : undefined,
            })}
          >
            About me
          </NavLink>
        </div>
        <div style={{ margin: "15px", fontSize: "7px" }}>
          <NavLink
            to="/contact"
            className={({ isActive }) => ({
              color: isActive ? activeClassName : undefined,
            })}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/icons/logo.svg";
import classes from "./navbar.module.css";
import Hero from "../Hero/Hero";

export default function NavBar() {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.nav_content}>
          <div>
            <img style={{ width: 50 }} src={logo} alt="logo" />
            <h1 style={{ letterSpacing: 5 }}>
              <span>H</span>ello
            </h1>
          </div>
          <div>
            <a href="#">
              <span>HOME</span>
            </a>
            <a href="#">ABOUT</a>
            <a href="#">SETTINGS</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </nav>
    </>
  );
}

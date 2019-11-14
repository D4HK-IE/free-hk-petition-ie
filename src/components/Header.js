import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const HeaderTitle = () => {
  return (
    <div className="mynavbar w-nav">
      <div className="container">
        <div className="nav-menu w-clearfix">
          <a
            href="https://www.facebook.com/democracy4hkinireland/"
            className="w-inline-block"
          >
            <img
              src="logo.jpeg"
              alt="democracy for Hong Kong in Ireland"
              className="app-logo"
            />
          </a>
          <div className="nav-title">
            <h2 className="navtitle">Stand with HK, Fight for Democracy</h2>
            <div className="navbar">
              <Link className="navitem" to="/">
                Home - Email to TDs
              </Link>
              &nbsp;&nbsp;
              <Link className="navitem" to="/list">
                Worldwide Rallies List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;

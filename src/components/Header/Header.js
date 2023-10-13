import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header({ counter, fav}) {
  return (
    <div className="main-header">
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" />{" "}
            <a href="mailto:contact@example.com">cityhospital@example.com</a>
            <i className="bi bi-phone" /> +91 9988776655
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div className="logo">
            <a href="index.html">
              <h1 className="logo me-auto">City</h1>
              <br />
              <h2 className="logo-tiny-text me-auto">
                Multispeciality Hospital
              </h2>
            </a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="index.html"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/department"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="./pages/departments.html"
                >
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/doctor"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="./pages/doctors.html"
                >
                  Doctors
                </NavLink>
              </li>

              <li>
              <NavLink
                  to={"/dataform"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  // href="./pages/doctors.html"
                >
                  Forms
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/medicine"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="./pages/contact.html"
                >
                  Medicine
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="./pages/about.html"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="./pages/contact.html"
                >
                  Contact
                </NavLink>
              </li>

              {/* <li><NavLink to={"/appointement"} className="nav-link scrollto" activeClassName="active" href="./pages/contact.html"></NavLink></li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <NavLink
            to={"/appointement"}
            href="./pages/appointment.html"
            className="appointment-btn scrollto"
          >
            <span className="d-none d-md-inline">Make an</span>
            Appointment
          </NavLink>
          <NavLink to={"/auth"} className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Login/ Signup</span>
          </NavLink>
          <Badge badgeContent={counter} color="primary">
            <AddShoppingCartIcon className="addicon" />
          </Badge>
          <Badge badgeContent={fav.length} color="primary">
               <FavoriteBorderIcon className="addicon" />
          </Badge>
        </div>
      </header>
    </div>
  );
}

export default Header;

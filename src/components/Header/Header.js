import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../../context/theme.context";
import Switch from '@mui/material/Switch';
import LanguageContext, { useLanguage } from "../../context/language.context";
import { LANGUAGE } from "../../context/ActionType";
import { logoutRequest } from "../../redux/action/auth.action";

function Header({counter, fav}) {
  
  const cartone= useSelector(state => state.cart); 
  console.log(cartone); 
  const label = { inputProps: {'Switch demo' : 'aria-label'} };
  const favone=useSelector(state=>state.fav);
  const theme = useContext(ThemeContext);
  const {state,dispatch} = useContext(LanguageContext);
  const language = useContext(LanguageContext);
  const auth = useSelector(state => state.auth);
  const dispatchdata = useDispatch();
  // console.log(auth);

  // console.log(language);

  const handleLanguageChange = (e) =>{
    const selectedLanguage = e.target.value;
    console.log(selectedLanguage);

    dispatch({type : LANGUAGE , payload : selectedLanguage})
  }

  // console.log(theme);

  let qty=0;
  {cartone.cart.map((v,i)=>
    qty= qty +v.qty
  )}
  console.log(qty);

  const handleLogOut = () =>{
    dispatchdata(logoutRequest())
  }

  return (
    <div className="main-header">
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" />{" "}
            <a href="mailto:contact@example.com">{language.language === 'english' ? 'cityhospital@example.com' : 'hello'}</a>
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

          <select onChange={handleLanguageChange} className="languages">
          <option value='0'>--Select--</option>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='gujarati'>Gujarati</option>
         </select>
          </div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div className="logo">
            <a href="index.html">
              <h1 className="logo me-auto">City</h1>
              <br/>
              <h2 className="logo-tiny-text me-auto">
                Multispeciality Hospital
              </h2>
            </a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0 ">
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
                  to={"/counter"}
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link scrollto active" : "nav-link scrollto"}
                  activeClassName="active"
                  href="./pages/departments.html"
                >
                  Counter
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

          <Switch {...label} defaultUnchecked onClick={()=> theme.toggleTheme(theme.theme)} />

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
          {
            auth.user ? 
            <NavLink to={"/"} onClick={handleLogOut} className="appointment-btn scrollto">
            <span className="d-none d-md-inline">LogOut</span>
          </NavLink>

:
            <NavLink to={"/auth"} className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Login/ Signup</span>
          </NavLink>
          }
          
          <NavLink to={"/cart"}>
          <Badge badgeContent={qty} color="primary">
            <AddShoppingCartIcon className="addicon" />
          </Badge>
          </NavLink>
          <NavLink to={"/wishlist"}>
          <Badge badgeContent={favone.fav.length} color="primary">
               <FavoriteBorderIcon className="addicon" />
          </Badge>
          </NavLink>
         
        </div>
      </header>
    </div>
  );
}

export default Header;

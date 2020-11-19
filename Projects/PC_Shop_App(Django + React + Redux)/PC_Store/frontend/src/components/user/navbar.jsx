import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/auth";
import logo from "../../images/logo.jpg";
import { componentAttribute } from "../../services/componentAtributes";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PersonIcon from "@material-ui/icons/Person";
import SlideBar from "./slidebar";

import "../../css/navbar.css";

function Navbar(props) {
   Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  const { isAuthenticated, user } = props.auth;
  const { logout } = props;
  const components = Object.keys(componentAttribute);

  const authLinks = (
    //<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <span className="navList__element">
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
      </span>
   //   <li  onClick={logout} className="navList__element">
      //    Logout
    //  </li>
   // </ul>
  );

  const guestLinks = (
      <li className="navList__element">
        <NavLink to="/login">
              <p className="component__title">LOGIN</p>
        </NavLink>
      </li>
  );

  return (
    <React.Fragment>
      <SlideBar />
      <div className="navbar">
        <MenuIcon className="navMenu" />
        <Link to="/home">
          <img className="navLogo" src={logo} alt="SBS-Logo" />
        </Link>
        <ul className="navList ">
           {isAuthenticated ? authLinks : guestLinks}
          <li className="navList__element">
            <NavLink to="/">
              <p className="component__title">PCS GAMERS</p>
            </NavLink>
          </li>
          <li className="navList__element">
            <NavLink to="/">
              <p className="component__title">LAPTOPS</p>
            </NavLink>
          </li>
          <li className="navList__element">
            <NavLink to="/">
              <p className="component__title">MONITORS</p>
            </NavLink>
          </li>
          <li className="navList__element">
            <div className="components" id="components">
              <div className="components__icon">
                <NavLink to="/components">
                  <p className="component__title">COMPONENTS</p>
                </NavLink>
                <ExpandMoreIcon />
              </div>
              <div className="components__selector">
                <ul className="components__list">
                  {components.map((component) => (
                    <li
                      onClick={() =>
                        (window.location = `/components/${component}`)
                      }
                      key={component}
                      className={`${component}`}
                    >
                      <Link to={`/components/${component}`}>
                        {component.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <form action="">
          <div className="search__input">
            <SearchIcon className="icon__input" />
            <input className="text__input" type="text"></input>
          </div>
        </form>
        <div className="login__logout">
          <PersonOutlineIcon />
        </div>
        <div className="shopping__chart">
          <ShoppingCartIcon />
          <p>0.000 TND</p>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

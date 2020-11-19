import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import SpeakerIcon from "@material-ui/icons/Speaker";

import "../../css/slidebar.css";

function SlideBar(props) {
  SlideBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  const { isAuthenticated, user } = props.auth;
  const { logout, isAdmin } = props;

  return (
    <div>
      <nav className="slideBar">
        <ul className="slideBar__list">
          <li className="slideBar__item">
            <FontAwesomeIcon
              className="icon"
              icon={user ? faSignOutAlt : faSignInAlt}
            />
            {user ? (
              <div onClick={logout} style={{ cursor: "pointer" }}>
                <p className="title">Sign Out</p>
              </div>
            ) : (
              <NavLink to="/login">
                <p className="title">Sign In</p>
              </NavLink>
            )}
          </li>
          <li className="slideBar__item">
            <FontAwesomeIcon className="icon" icon={faHome} />
            <NavLink to="/home">
              <p className="title"> Home</p>
            </NavLink>
          </li>
          <hr className="slideBar__seperator" />
          <li className="slideBar__item">
            <SpeakerIcon className="icon" />
            <p className="title">PC Gamer</p>
          </li>
          <li className="slideBar__item">
            <FontAwesomeIcon className="icon" icon={faLaptop} />
            <p className="title">Laptop</p>
          </li>

          <li className="slideBar__item">
            <FontAwesomeIcon className="icon" icon={faDesktop} />
            <p className="title">Monitor</p>
          </li>
          <hr className="slideBar__seperator" />
          <li className="slideBar__item">
            <FontAwesomeIcon className="icon" icon={faMicrochip} />
            <NavLink to="/components">
              <p className="title"> Components</p>
            </NavLink>
          </li>

          <li className="slideBar__item">
            <FontAwesomeIcon className="icon" icon={faHeart} />
            <NavLink to="/favourites">
              <p className="title">Favourite</p>
            </NavLink>
          </li>

          {isAdmin && (
            <li className="slideBar__item">
              <FontAwesomeIcon className="icon" icon={faUsersCog} />
              <NavLink to="/admin-space">
                <p className="title">Admin</p>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAdmin: state.users.loggedInUser.is_superuser,
});

export default connect(mapStateToProps, { logout })(SlideBar);

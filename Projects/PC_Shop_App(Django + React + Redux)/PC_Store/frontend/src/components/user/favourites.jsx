import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRemoveToProfile } from "./../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

function Favourites(props) {
  Favourites.propTypes = {
    profile: PropTypes.object.isRequired,
    favouritesList: PropTypes.array.isRequired,
    addRemoveToProfile: PropTypes.func.isRequired,
  };

  const favouritesList = props.favouritesList?.filter(
    (component) => component !== undefined
  );
  const userProfileData = props.profile;
  let { favourites } = userProfileData?.data ? userProfileData?.data : ""; // Due to the setTimeout in action dispatching

  const componentIsFavourite = (componentName) => {
    // Create table that contain names of favourite components
    const favouriteList = [];
    if (favourites) {
      favourites.map((component) => {
        favouriteList.push(component?.name);
      });
    }
    // Determine either the component is in favourite list or not
    const index = favouriteList.findIndex((e) => e === componentName);
    if (index === -1) return false;
    return true;
  };

  const updateFavouriteList = (component) => {
    // console.log(component);
    if (favourites && componentIsFavourite(component.name) === false) {
      favourites.push(component);
      favourites = favourites.filter((component) => component !== undefined);
      userProfileData.data.favourites = favourites;
      props.addRemoveToProfile(userProfileData);
    } else {
      favourites = favourites.filter((e) => e?.name !== component?.name);
      favourites = favourites.filter((component) => component !== undefined);
      userProfileData.data.favourites = favourites;
      props.addRemoveToProfile(userProfileData);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="cards__list">
          {favouritesList?.map((component) => (
            <div key={component?.name} className="component__card">
              <img
                className="component__image"
                src={component?.image}
                alt=""
                onClick={() => {
                  props.history.push(
                    `/components/${component.hardware_type}/${component.id}/${component.name}`
                  );
                }}
              />
              <div className="component__info">
                <h4 className="component__name">{component?.name}</h4>
                <div className="componentCard__footer">
                  <div className="component__price">
                    <p>{component?.price} TND</p>
                  </div>
                  <FontAwesomeIcon
                    className="fav_icon"
                    icon={
                      componentIsFavourite(component.name)
                        ? faHeart
                        : faHeartBroken
                    }
                    onClick={() => updateFavouriteList(component)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  favouritesList: state.auth.profile?.data.favourites,
});

export default connect(mapStateToProps, { addRemoveToProfile })(Favourites);

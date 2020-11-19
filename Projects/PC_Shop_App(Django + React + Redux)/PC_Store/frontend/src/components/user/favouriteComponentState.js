export const componentIsFavourite = (favourites,componentName) => {
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

export const updateFavouriteList = (favourites,component) => {
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

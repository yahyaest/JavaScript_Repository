import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser, addUser, updateUser } from "../../actions/users";
import { register } from "../../actions/auth";

import UserForm from "../../common/userForm";

function UserInfoForm(props) {
  UserInfoForm.propTypes = {
    userObject: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuperuser, setIsSuperuser] = useState("");
  const [password, setPassword] = useState("");

  const userId = props.match.params.id;
  const { userObject } = props;
  const currentUser = userObject;
  let newUser = {};

  useEffect(() => {
    if (props.match.url !== `/user/form/new`) {
      props.getUser(userId);
    }
  }, [props.match.url]);

  function handleSubmit(e) {
    e.preventDefault();
    if (props.match.url === `/user/form/new`) {
      newUser.username = userName;
      newUser.is_superuser = isSuperuser;
      newUser.password = password;
      newUser.email = email;

      const User = { username: userName, isSuperuser, password, email };

      //props.addUser(newUser);
      props.register(User);
      props.history.push(`/admin-space/users/`);
    } else {
      currentUser.username = userName ? userName : userObject.username;
      currentUser.is_superuser = isSuperuser
        ? isSuperuser
        : userObject.is_superuser;
      //currentUser.password = password;
      currentUser.email = email ? email : userObject.email;

      props.updateUser(currentUser, userId);
      props.history.push(`/admin-space/users/`);
    }
  }

  function handleChange(e) {
    if (e.target.name === "username") {
      setUserName(e.currentTarget.value);
    }
    if (e.target.name === "email") {
      setEmail(e.currentTarget.value);
    }
    if (e.target.name === "is_superuser") {
      setIsSuperuser(e.currentTarget.value);
    }
    if (e.target.name === "password") {
      setPassword(e.currentTarget.value);
    }
  }

  return (
    <div>
      <UserForm
        userObject={currentUser}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        url={props.match.url}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  userObject: state.users.user,
});

export default connect(mapStateToProps, {
  getUser,
  addUser,
  updateUser,
  register,
})(UserInfoForm);

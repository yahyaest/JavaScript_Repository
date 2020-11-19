import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  resetUser,
  getUsers,
  deleteUser,
} from "../../actions/users";
import AdminNavbar from "./adminNavbar";
import TableForm from "../../common/tableForm";
import { columns } from "../../services/userColumns";

function UsersList(props) {
  UsersList.propTypes = {
    usersTable: PropTypes.array.isRequired,
    resetUser: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.resetUser();
    props.getUsers();
  }, []);

  function handleDelete(id) {
    props.deleteUser(id);
  }

  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="container">
        <h1>Users</h1>
        <Link to={`/user/form/new`} className="btn btn-primary btn-sm">
          Add
        </Link>

        <TableForm
          columns={columns}
          TableList={props.usersTable}
          handleDelete={handleDelete}
          url={props.match.url}
        />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  usersTable: state.users.users,
});

export default connect(mapStateToProps, {
  resetUser,
  getUsers,
  deleteUser,
})(UsersList);

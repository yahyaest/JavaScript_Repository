import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, resetTask, deleteTasks } from "./../actions/tasks";
import "../css/mainPage.css";

export function MainPage(props) {
  MainPage.propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    resetTask: PropTypes.func.isRequired,
    deleteTasks: PropTypes.func.isRequired,
  };

  const [search, setSearch] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.getTasks();
    props.resetTask();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const input = document.getElementById("task__input").value;
    let searchResult = props.tasks.filter((task) =>
      input !== ""
        ? task.title.toLowerCase().indexOf(input.toLowerCase()) > -1
        : props.tasks
    );
    setSearch(searchResult);
    setShow(true);
  };

  const tableRow = (tasks) => {
    return tasks.map((task) => (
      <tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.created_at}</td>
        <td>
          <Link to={`/task/${task.id}`} className="btn btn-primary">
            Update
          </Link>
        </td>
        <td>
          <button
            onClick={() => props.deleteTasks(task.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Main Page</h1>
      <div className="task__list">
        <form action="">
          <input type="text" className="form-control" id="task__input" />
          <Link to="/task/new" className="btn btn-info">
            Add Task
          </Link>
          <button onClick={(e) => handleSearch(e)} className="btn btn-warning">
            Search
          </button>
        </form>
        <table className="task__table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Task</th>
              <th>Author</th>
              <th>Created At</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="tasks">
            {!show ? tableRow(props.tasks) : tableRow(search)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ tasks: state.tasks.tasks });

export default connect(mapStateToProps, { getTasks, resetTask, deleteTasks })(
  MainPage
);

// function getCookie(name) {
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     var cookies = document.cookie.split(";");
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = cookies[i].trim();
//       // Does this cookie string begin with the name we want?
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

// function fetchData() {
//   const url = "http://127.0.0.1:8000/api/task/";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       //console.log(data);
//       setTasks(data);
//     })
//     .catch((err) => alert(err));
// }

// const handleUpdate = (task) => {
//   let csrftoken = getCookie("csrftoken");
//   console.log(task);
//   const title = document.getElementById("task__input").value;
//   fetch(`http://127.0.0.1:8000/api/task/${task.id}/`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//       "X-CSRFToken": csrftoken,
//     },
//     body: JSON.stringify({ title: `${title}` }),
//   }).then((response) => fetchData());
// };

// const handleDelete = (task) => {
//   let csrftoken = getCookie("csrftoken");
//   console.log(task);
//   fetch(`http://127.0.0.1:8000/api/task/${task.id}/`, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json",
//       "X-CSRFToken": csrftoken,
//     },
//   }).then((response) => fetchData());
// };

// const handleCreate = (e) => {
//   let csrftoken = getCookie("csrftoken");
//   e.preventDefault();
//   console.log(e);
//   const title = document.getElementById("task__input").value;
//   fetch(`http://127.0.0.1:8000/api/task/`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       "X-CSRFToken": csrftoken,
//     },
//     body: JSON.stringify({ title: `${title}` }),
//   }).then((response) => fetchData());
// };

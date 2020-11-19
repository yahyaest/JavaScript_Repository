import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTask, addTasks, updateTasks } from "./../actions/tasks";

function TaskForm(props) {
  TaskForm.propTypes = {
    task: PropTypes.object.isRequired,
    getTask: PropTypes.func.isRequired,
    addTasks: PropTypes.func.isRequired,
    updateTasks: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
  };

  const [title, setTitle] = useState("");

  const task_id = props.match.params.id;
  let newTask = {};

  const { task, username } = props;

  useEffect(() => {
    if (props.match.url !== "/task/new") props.getTask(task_id);
  }, [props.match.url]);

  function handleChange(e) {
    if (e.target.name === "title") {
      setTitle(e.currentTarget.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.match.url === "/task/new") {
      newTask.author = username;
      newTask.title = title;
      props.addTasks(newTask);
      props.history.push("/to_do");
    } else {
      task.author = username;
      task.title = title;
      props.updateTasks(task, task_id);
      props.history.push("/to_do");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="task">Task</label>
        <input
          defaultValue={props.match.url === "/task/new" ? "" : task.title}
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter Task"
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  task: state.tasks.task,
  username: state.auth.username,
});

export default connect(mapStateToProps, { getTask, addTasks, updateTasks })(
  TaskForm
);

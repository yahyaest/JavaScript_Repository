import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../../actions/auth";
import { Form,Button, Card } from "react-bootstrap";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }

    const { username, password } = this.state;

    return (
      <div className="col-md-6 m-auto">
        <Card  className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="form-group">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </Form.Group>

            <div className="form-group">
              <Button type="submit" variant="primary">
                Login
              </Button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form>
        </Card >
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

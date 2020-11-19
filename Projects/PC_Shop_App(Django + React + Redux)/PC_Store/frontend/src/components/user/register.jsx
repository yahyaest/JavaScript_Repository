import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { Form, Button, Card } from "react-bootstrap";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }

    const { username, email, password, password2 } = this.state;

    return (
      <div className="col-md-6 m-auto">
        <Card className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
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
            <Form.Group className="form-group">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </Form.Group>

            <div className="form-group">
              <Button type="submit" variant="primary">
                Register
              </Button>
            </div>
            <p>
              Already have an account? <Link to="/home">Login</Link>
            </p>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);

import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    /// Validation with Joi Modue ////
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // console.log(result); //{error} instead of result and error instead of result.error
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    //console.log(errors);
    return errors;

    //// Default Validate Method ////

    // const errors = {};
    // const { data } = this.state;

    // if (data.username.trim() === "")
    //   errors.username = "Username is required.";

    // if (data.password.trim() === "")
    //   errors.password = "Password is required.";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  // validateProperty = (input) => {
  validateProperty = ({ name, value }) => {
    //// validateProperty with Joi Modue ////

    const obj = { [name]: value }; // Computed Property
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema); // error instead result.error
    return error ? error.details[0].message : null;

    //// Default validateProperty Method ////

    // if (name === "username") {
    //   // name instead input.name and value instead input.value
    //   if (value.trim() === "") {
    //     return "Username is required.";
    //     //..
    //   }
    // }
    // if (name === "password") {
    //   if (value.trim() === "") {
    //     return "Password is required.";
    //     //..
    //   }
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    ///  Refs to aDOM element ///
    // const username = this.username.current.value;
    // insted of  document.getElementById('username').value

    const errors = this.validate();
    //console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  //handleChange = (e) => {
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    //console.log(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    //console.log(errors);

    const data = { ...this.state.data };
    //data[e.currentTarget.name] = e.currentTarget.value;
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;

import React from "react";
import { Form } from "react-bootstrap";

function Input(props) {
  const {
    componentType,
    controlId,
    label,
    name,
    type,
    url,
    value,
    handleChange,
  } = props;

  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          defaultValue={
            url !== `/${componentType}/form/new` || "/user/form/new"
              ? value
              : ""
          }
          type={type}
          name={name}
          placeholder={`Enter ${label}`}
          onChange={handleChange}
        />
      </Form.Group>
    </div>
  );
}

export default Input;

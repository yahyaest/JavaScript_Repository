import React from "react";
import { Form, Button } from "react-bootstrap";
import Input from "./input";
import { userAttribute } from "./../services/userAtributes";

function UserForm(props) {
  const { handleSubmit, handleChange, userObject, url } = props;

  const modifiedAttribute =
    url !== "/user/form/new"
      ? userAttribute.filter((attribute) => attribute.title !== "password")
      : userAttribute;

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {modifiedAttribute.map((attribute) => (
        <Input
          key={attribute.label}
          controlId={`formBasic${attribute.label}`}
          label={attribute.label}
          name={attribute.title}
          type={attribute.type}
          url={url}
          value={userObject[attribute.title]}
          handleChange={handleChange}
        />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;

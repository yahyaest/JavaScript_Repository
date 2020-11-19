import React from "react";
import { Form, Button } from "react-bootstrap";
import Input from "./input";
import { componentAttribute } from "./../services/componentAtributes";

function ComponentForm(props) {

  const {
    handleSubmit,
    handleChange,
    componentType,
    componentObject,
    url,
  } = props;

  return (
    <Form
      onSubmit={(e) => handleSubmit(e, componentType)}
      method="post"
      encType="multipart/form-data"
    >
      {componentAttribute[componentType].map((component) => (
        <Input
          key={component.label}
          componentType={componentType}
          controlId={`formBasic${component.label}`}
          label={component.label}
          name={component.title}
          url={url}
          value={componentObject ? componentObject[component.title] : ""}
          handleChange={handleChange}
        />
      ))}

      <label htmlFor="image">Image:</label>
      <input
        type="file"
        name="image"
        id="image"
        defaultValue=""
        onChange={handleChange}
      />
      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ComponentForm;

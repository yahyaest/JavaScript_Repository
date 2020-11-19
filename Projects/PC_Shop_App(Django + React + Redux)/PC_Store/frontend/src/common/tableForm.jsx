import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function TableForm(props) {
  
  const update_column = {
    title: "Update",
    value: (element) => {
      return props.url === "/admin-space/users" ? (
        <Link
          to={`/user/form/${element.id}/`}
          className="btn btn-warning btn-sm"
        >
          Update
        </Link>
      ) : (
        <Link
          to={`/${props.componentVariant}/form/${element.id}/`}
          className="btn btn-warning btn-sm"
        >
          Update
        </Link>
      );
    },
  };
  const delete_column = {
    title: "Delete",
    value: (element) => {
      return (
        <Button
          variant="danger"
          size="sm"
          onClick={() => props.handleDelete(element.id)}
        >
          Delete
        </Button>
      );
    },
  };
  return (
    <Table striped bordered hover variant="dark" size="sm" responsive="md">
      <thead>
        <tr>
          {props.columns?.map((column) => (
            <th key={column.title}>{column.title}</th>
          ))}
          <th key={update_column.title}>{update_column.title}</th>
          <th key={delete_column.title}>{delete_column.title}</th>
        </tr>
      </thead>
      <tbody>
        {props.TableList?.map((element) => (
          <tr key={element.id}>
            {props.columns?.map((column) => (
              <td key={column.title}>{column.value(element)}</td>
            ))}
            <td key={update_column.title}>{update_column.value(element)}</td>
            <td key={delete_column.title}>{delete_column.value(element)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableForm;

import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./adminNavbar";
import { componentAttribute } from "../../services/componentAtributes";

function Admin() {
    const components = Object.keys(componentAttribute);

  return (
    <div>
      <AdminNavbar />
      <h3>Components</h3>
      <ul className="componentList"></ul>
      {components.map((component) => (
        <li key={component}>
          <Link to={`/admin-space/components/${component}/`}>
            {component.toUpperCase()}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default Admin;

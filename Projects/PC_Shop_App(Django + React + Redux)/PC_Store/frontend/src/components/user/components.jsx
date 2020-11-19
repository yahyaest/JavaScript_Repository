import React from "react";
import { NavLink, Link } from "react-router-dom";
import { componentAttribute } from "./../../services/componentAtributes";
import Navbar from "./navbar";
import "../../css/components.css"

function Components() {
  const components = Object.keys(componentAttribute);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h2 className="components__title">Components</h2>
        <div className="components__type">
          {components.map((component) => (
            <div key={component} className="component__box">
              <Link to={`/components/${component}`}>
                <p className="componentBox__title">{component.toUpperCase()}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Components;

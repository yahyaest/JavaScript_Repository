import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  resetComponent,
  currentComponent,
  getComponents,
  deleteComponent,
} from "../../actions/merchandises";
import AdminNavbar from "./adminNavbar";
import TableForm from "../../common/tableForm";
import { columns } from "../../services/componentColumns";

function HardwareList(props) {
  HardwareList.propTypes = {
    componentTable: PropTypes.object.isRequired,
    resetComponent: PropTypes.func.isRequired,
    currentComponent: PropTypes.func.isRequired,
    getComponents: PropTypes.func.isRequired,
    deleteComponent: PropTypes.func.isRequired,
  };

  const componentVariant = props.match.params.component;
  let component_column = columns[componentVariant];

  useEffect(() => {
    props.resetComponent();
    props.currentComponent(componentVariant.toUpperCase());
    props.getComponents(componentVariant);
  }, []);

  function handleDelete(id) {
    props.deleteComponent(id, componentVariant);
  }

  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="container">
        <h1>PC_Builder</h1>
        <h3>{componentVariant.toUpperCase()}</h3>
        <Link
          to={`/${componentVariant}/form/new`}
          className="btn btn-primary btn-sm"
        >
          Add
        </Link>

        <TableForm
          columns={component_column}
          TableList={props.componentTable[componentVariant.toUpperCase()]}
          handleDelete={handleDelete}
          url={props.match.url}
          componentVariant={componentVariant}
        />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  componentTable: state.merchandises.merchandises.Components,
});

export default connect(mapStateToProps, {
  resetComponent,
  currentComponent,
  getComponents,
  deleteComponent,
})(HardwareList);

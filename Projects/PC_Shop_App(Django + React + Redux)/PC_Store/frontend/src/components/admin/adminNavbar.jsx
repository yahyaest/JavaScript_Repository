import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { componentAttribute } from "../../services/componentAtributes";

function AdminNavbar() {
  const components = Object.keys(componentAttribute);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/admin-space">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/admin-space">Home</Nav.Link>
          <Nav.Link href="/admin-space/users">Users</Nav.Link>
          <Nav.Link href="/admin-space">Orders</Nav.Link>

          <NavDropdown title="Components" id="basic-nav-dropdown">
            {components.map((component) => (
              <React.Fragment key={component}>
                <NavDropdown.Item href={`/admin-space/components/${component}`}>
                  {component.toUpperCase()}
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </React.Fragment>
            ))}
          </NavDropdown>
          <Nav.Link href="/">Exit</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default AdminNavbar;

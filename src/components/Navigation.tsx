import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navigation() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light className="mx-auto">
      <NavbarBrand href="/" className="me-auto">
        Parallax Landing Page
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="me-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="#">Menu Item 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Menu Item 2</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;

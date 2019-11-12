import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div id="home">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#main-info">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#education">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contacts">Contact me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
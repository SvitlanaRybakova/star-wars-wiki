import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navigation = () => {
  const { isBlueTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="md" className={isBlueTheme ? "blue-theme" : "dark-theme"}>
      <Container>
        <Link to="/" className="navbar-brand">
          StarWars Wiki
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/planets" className="nav-link">
              Planets
            </NavLink>

            <NavLink to="/people" className="nav-link">
              People
            </NavLink>
            <NavLink to="/lazy" className="nav-link">
              Lazy Load
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase.init";
import LogOut from "./LogOut";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="30" width={200} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {user && (
              <>
                <Nav.Link as={Link} to="/manageitem">
                  Manage Item
                </Nav.Link>
                <Nav.Link as={Link} to="/additem">
                  Add Item
                </Nav.Link>
                <Nav.Link as={Link} to="/myitem">
                  My Item
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            {user ? (
              <LogOut />
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/signup">
              Singup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
import brand from "../images/logo-brand.png";
import logout from "../images/icon-logout.png";
import notif from "../images/icon-notif.png";
import profile from "../images/icon-profile.png";
import Db from "./Db";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState();
  const [currentTab, setCurrentTab] = useState();

  useEffect(() => {
    Db.isLoggedIn(setLoggedIn);
    setCurrentTab(window.location.pathname);
  }, []);

  if (!loggedIn) {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src={brand} alt="newsroom header logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" activeKey={currentTab}>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Log In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  return (
    <>
      <Navbar variant="dark" bg="primary">
        <Container id="basic-navbar-container">
          <Navbar.Brand href="/assigned">
            <img src={brand} alt="newsroom header logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={currentTab}></Nav>
          </Navbar.Collapse>
          <div className="cont--icons">
            <Nav.Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                Db.handleLogoutAttempt(setLoggedIn);
              }}
            >
              <img className="icon" src={logout} alt="icon logout"></img>
            </Nav.Link>
            <img className="icon" src={notif} alt="icon notifications"></img>
            <img className="icon" src={profile} alt="icon profile"></img>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

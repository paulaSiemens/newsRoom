import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
import brand from "../images/logo-header.png";
import logout from "../images/icon-logout.png";
import notif from "../images/icon-notif.png";
import profile from "../images/icon-profile.png";

export function Header() {
  const [loggedIn, setLoggedIn] = useState();
  const [currentTab, setCurrentTab] = useState();

  useEffect(() => {
    if (Parse.User.current()) setLoggedIn(true);
    setCurrentTab(window.location.pathname);
  }, []);

  function handleLogoutAttempt(e) {
    alert("You have logged out");
    setLoggedIn(false);
    Parse.User.logOut();
    window.location.href = "/";
  }
  if (!loggedIn) {
    return (
      <>
        <Navbar variant="dark" bg="primary">
          <Container id="basic-navbar-container">
            <Navbar.Brand href="/">
              <img src={brand}></img>
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
          <Navbar.Brand href="/">
            <img src={brand}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={currentTab}>
              <Nav.Link href="/submitIdea">Create new idea</Nav.Link>
              <Nav.Link href="/selection">Selection</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="cont--icons">
            <Nav.Link href="" onClick={handleLogoutAttempt}>
              <img className="icon" src={logout}></img>
            </Nav.Link>
            <img className="icon" src={notif}></img>
            <img className="icon" src={profile}></img>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

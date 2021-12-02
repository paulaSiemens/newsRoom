import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
import brand from "../images/logo-header.png";
import logout from "../images/icon-logout.png";
import notif from "../images/icon-notif.png";
import profile from "../images/icon-profile.png";

export default function Header() {
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

  {
    /* TODO look into fix for code dublication */
  }
  if (!loggedIn) {
    return (
      <>
        <Navbar variant="dark" bg="primary">
          <Container id="basic-navbar-container">
            <Navbar.Brand href="/">
              <img src={brand} alt="newsbrand header logo"></img>
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
          {/* REVIEW navbar toogle? */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* REVIEW do we need collapse? could replace icons maybe?*/}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={currentTab}></Nav>
          </Navbar.Collapse>
          <div className="cont--icons">
            {/* FIXME nav.link icon not styling */}
            <Nav.Link href="" onClick={handleLogoutAttempt}>
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

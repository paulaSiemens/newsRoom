import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import brand from "../../resources/logo/logo-brand.png";
import logout from "../../resources/icons/icon-logout.png";
import notif from "../../resources/icons/icon-notif.png";
import Db, { getUserRole } from "../../Db";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState();
  const [currentTab, setCurrentTab] = useState();

  useEffect(() => {
    Db.isLoggedInCallBack(setLoggedIn);
    setCurrentTab(window.location.pathname);
  }, []);

  function getIconType(){
    switch (Db.getUserRole()) {
      case "Journalist":
        return "J"
      case "Photographer":
        return "P"
      case "Assistant":
        return "A"
      default:
       return "E"
    }
  }

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
            <div className="icon-profile" >{getIconType()}</div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

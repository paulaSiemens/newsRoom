import { Navbar, Container, Nav, } from "react-bootstrap";
import Parse from "parse";
import { useState } from "react";
import { useEffect } from "react";

export function Header() {
  const [loggedIn, setLoggedIn] = useState();
  const [currentTab, setCurrentTab] = useState();

  useEffect(() => {
  if (Parse.User.current( )) setLoggedIn(true);
  setCurrentTab(window.location.pathname);
}, []);

  function handleLogoutAttempt(e) {
      alert("You have logged out");
      Parse.User.logOut().then((loggedOutUser) => {
        setLoggedIn(false);
        window.location.href="/";
        window.location.reload(false);
      });
    }
  if (!loggedIn) {return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">newsRoom</Navbar.Brand>
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
)}
return (
  <>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">newsRoom</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" activeKey={currentTab}>
            <Nav.Link href="/submitIdea">Create new idea</Nav.Link>
            <Nav.Link href="/selection">Selection</Nav.Link>
            <Nav.Link href="" onClick={handleLogoutAttempt}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

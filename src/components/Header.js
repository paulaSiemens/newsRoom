import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import "../components/Header.css";
import logo from "../images/logo-header.png";
import logout from "../images/icon-logout.png";
import notif from "../images/icon-notif.png";
import profile from "../images/icon-profile.png";

export function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container id="basic-navbar-container">
        <Navbar.Brand href="#home">
          <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!Parse.User.current() && (
            <>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            </>
            )}

            {Parse.User.current() && (
            <>
            <Nav.Link href="/submitIdea">Create new idea</Nav.Link>
            <Nav.Link href="/ideas">Selection</Nav.Link>
            <Nav.Link href="/logout">Log Out</Nav.Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* <div className="cont--icons">
          <img className="icon" src={logout}></img>
          <img className="icon" src={notif}></img>
          <img className="icon" src={profile}></img>
        </div> */}
      </Container>
    </Navbar>
  );
}

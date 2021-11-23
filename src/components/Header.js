import { Navbar, Container, Nav, Link } from "react-bootstrap";
import Parse from "parse";
import "../components/Header.css";

export function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">newsRoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!Parse.User.current( ) && (
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
        <div className="cont--icons">
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
      </Container>
    </Navbar>
  );
}

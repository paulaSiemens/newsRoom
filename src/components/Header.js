import { Navbar, Container, Nav, Link } from "react-bootstrap";
import Parse from "parse";

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
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
            )
        }

{Parse.User.current( ) && (
            <>
            <Nav.Link href="/submitIdea">Create new idea</Nav.Link>
            <Nav.Link href="/ideas">Selection</Nav.Link>
            <Nav.Link href="/logout">Log Out</Nav.Link>
            </>
            )
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

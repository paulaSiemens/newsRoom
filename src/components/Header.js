import { Navbar, Container, Nav, Offcanvas, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import brand from "../resources/logo/logo.svg";
import logout from "../resources/icons/icon-logout.png";
import notif from "../resources/icons/icon-notif.png";
import profileIcon from "../resources/icons/icon-profile.png";
import Db, { getUserRole } from "../Db";

export default function Header() {
	const [loggedIn, setLoggedIn] = useState();
	const [currentTab, setCurrentTab] = useState();

	useEffect(() => {
		Db.isLoggedInCallBack(setLoggedIn);
		setCurrentTab(window.location.pathname);
	}, []);

	function getProfileIcon() {
		switch (Db.getUserRole()) {
			case "Journalist":
				return "J";
			case "Photographer":
				return "P";
			case "Assistant":
				return "A";
			default:
				return "E";
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
		<Navbar variant="dark" className="navbar">
			<Container className="container-header-left">
				<Navbar.Brand className="nav-brand" href="/assigned">
					<img src={brand} alt="newsroom header logo" />
				</Navbar.Brand>
			</Container>
			<Container className="container-header-middle">
				<p className="welcometext">Welcome {Db.getUserRole()}</p>
				<div className="cont--icons">
					<img className="icon" src={profileIcon} alt="profile picture icon" />
					<img className="icon" src={notif} alt="notifications icon" />
					<Nav.Link
						onClick={(e) => {
							e.preventDefault();
							Db.handleLogoutAttempt(setLoggedIn);
						}}
					>
						<img className="icon" src={logout} alt="logout icon" />
					</Nav.Link>
				</div>
				<Navbar.Toggle />
			</Container>
		</Navbar>
	);
}

import "./SideNav.css";
import assigned from "../images/icon-assigned.png";
import unassigned from "../images/icon-unassigned.png";
import submitted from "../images/icon-submitted.png";
import archived from "../images/icon-archived.png";
import ideas from "../images/icon-ideas.png";
import employees from "../images/icon-employees.png";
import Db from "./Db";

import React from "react";

export default function SideNav() {
  if (Db.getUserRole() == "Editor") {
    return (
      <nav className="navbar-container">
        <a className="navbar-link" href="/assigned">
          <img className="navbar-img" src={assigned} />
          Assigned
        </a>
        <a className="navbar-link" href="/selected">
          <img className="navbar-img" src={unassigned} />
          Unassigned
        </a>
        <a className="navbar-link" href="/submitted">
          <img className="navbar-img" src={submitted} />
          Submitted
        </a>
        <a className="navbar-link" href="/archived">
          <img className="navbar-img" src={ideas} />
          Ideas
        </a>
        <a className="navbar-link" href="/archived">
          <img className="navbar-img" src={archived} />
          Archived
        </a>
        <a className="navbar-link" href="/employees">
          <img className="navbar-img" src={employees} />
          Employees
        </a>
      </nav>
      /* 
      <Nav className="flex-column" justify>
        <SideNavItem link="/assigned" img={assigned} linktxt="Assigned" />
        <SideNavItem link="/selection" img={unassigned} linktxt="Unassigned" />
        <SideNavItem link="/submitted" img={submitted} linktxt="Submitted" />
        <SideNavItem link="/archived" img={archived} linktxt="Archived" />
        <SideNavItem link="/employees" img={archived} linktxt="Employees" />
      </Nav> */
    );
  } else {
    /*     return (
      <Nav className="flex-column">
        <SideNavItem link="/submitIdea" img={add} linktxt="Create New Idea" />
        <SideNavItem link="/assigned" img={assigned} linktxt="Assigned" />
        <SideNavItem link="/submitted" img={submitted} linktxt="Submitted" />
        <SideNavItem link="/archived" img={archived} linktxt="Archived" />
        <SideNavItem link="/employees" img={archived} linktxt="Team Up" />
      </Nav>
    ); */
  }
}

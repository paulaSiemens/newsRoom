import "./SideNav.css";
import add from "../images/icon-add.png";
import assigned from "../images/icon-assigned.png";
import unassigned from "../images/icon-unassigned.png";
import submitted from "../images/icon-submitted.png";
import archived from "../images/icon-archived.png";
import SideNavItem from "./SideNavItem";
import Db from "./Db";

import React from "react";
import { Nav } from "react-bootstrap";

export default function SideNav() {
  if (Db.getUserRole() == "Editor") {
    return (
      <Nav className="flex-column" justify>
        <SideNavItem link="/assigned" img={assigned} linktxt="Assigned" />
        <SideNavItem link="/selection" img={unassigned} linktxt="Unassigned" />
        <SideNavItem link="/submitted" img={submitted} linktxt="Submitted" />
        <SideNavItem link="/archived" img={archived} linktxt="Archived" />
        <SideNavItem link="/employees" img={archived} linktxt="Employees" />
      </Nav>
    );
  } else {
    return (
      <Nav className="flex-column">
        <SideNavItem link="/submitIdea" img={add} linktxt="Create New Idea" />
        <SideNavItem link="/assigned" img={assigned} linktxt="Assigned" />
        <SideNavItem link="/employees" img={archived} linktxt="Team Up" />
      </Nav>
    );
  }
}

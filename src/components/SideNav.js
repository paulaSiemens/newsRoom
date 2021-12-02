import "./SideNav.css";
import add from "../images/icon-add.png";
import assigned from "../images/icon-assigned.png";
import unassigned from "../images/icon-unassigned.png";
import submitted from "../images/icon-submitted.png";
import archived from "../images/icon-archived.png";
import SideNavItem from "./SideNavItem";

import React from "react";
import { Nav, Image } from "react-bootstrap";

export default function SideNav() {
  return (
    <Nav className="flex-column" justify>
      <SideNavItem link="/submitIdea" img={add} linktxt="Create New Idea" />
      <SideNavItem link="/assigned" img={assigned} linktxt="Assigned" />
      <SideNavItem link="/selection" img={unassigned} linktxt="Unassigned" />
      <SideNavItem link="/submitted" img={submitted} linktxt="Submitted" />
      <SideNavItem link="/archived" img={archived} linktxt="Archived" />
    </Nav>
  );
}
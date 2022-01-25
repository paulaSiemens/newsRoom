import addIdea from "../images/icon-add.png";
import assigned from "../images/icon-assigned.png";
import unassigned from "../images/icon-unassigned.png";
import submitted from "../images/icon-submitted.png";
import archived from "../images/icon-archived.png";
import ideas from "../images/icon-ideas.png";
import employees from "../images/icon-employees.png";
import teamUp from "../images/icon-team-up.png";
import Db from "./Db";

import React from "react";

/*FIXME: code dublication - move to seperate component + props */

export default function SideNav() {
  if (Db.getUserRole() == "Editor") {
    return (
      <nav className="navbar-container">
        <a className="navbar-link" href="/assigned">
          <img className="navbar-img" src={assigned} />
          Assigned
        </a>
        <a className="navbar-link" href="/unassigned">
          <img className="navbar-img" src={unassigned} />
          Unassigned
        </a>
        <a className="navbar-link" href="/submitted">
          <img className="navbar-img" src={submitted} />
          Submitted
        </a>
{/*         <a className="navbar-link" href="/archived">
          <img className="navbar-img" src={ideas} />
          Ideas
        </a> */}
        <a className="navbar-link" href="/archived">
          <img className="navbar-img" src={archived} />
          Archived
        </a>
        <a className="navbar-link" href="/employees">
          <img className="navbar-img--wide" src={employees} />
          Employees
        </a>
        <div className="navbar-filler"></div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar-container">
        <a className="navbar-link" href="/submitIdea">
          <img className="navbar-img" src={addIdea} />
          Create new Idea
        </a>
        <a className="navbar-link" href="/assigned">
          <img className="navbar-img" src={assigned} />
          Assigned
        </a>
        <a className="navbar-link" href="/submitted">
          <img className="navbar-img" src={submitted} />
          Submitted
        </a>
        <a className="navbar-link" href="/archived">
          <img className="navbar-img" src={archived} />
          Archived
        </a>
        <a className="navbar-link" href="/employees">
          <img className="navbar-img--wide" src={teamUp} />
          Team Up
        </a>
        <div className="navbar-filler"></div>
      </nav>
    );
  }
}

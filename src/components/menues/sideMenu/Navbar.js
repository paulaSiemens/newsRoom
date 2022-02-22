import ideas from "../../../resources/icons/icon-ideas.svg";
import assigned from "../../../resources/icons/icon-assigned.svg";
import unassigned from "../../../resources/icons/icon-uassigned.svg";
import submitted from "../../../resources/icons/icon-submitted.svg";
import archived from "../../../resources/icons/icon-archived.svg";
import employees from "../../../resources/icons/icon-team-up.svg";
import teamUp from "../../../resources/icons/icon-team-up.svg";
import Db from "../../../Db";

import React from "react";

/*FIXME: code dublication - move to seperate component + props */

export default function SideNav() {
  if (Db.getUserRole() == "Editor") {
    return (
      <nav className="navbar-container">
        
        <a className="navbar-link" href="/assigned">
          <img className="navbar-img" src={assigned} /><p> Assigned</p>
         
        </a>
        <a className="navbar-link" href="/unassigned">
          <img className="navbar-img" src={unassigned} />
          Unassigned
        </a>
        <a className="navbar-link" href="/submitted">
          <img className="navbar-img" src={submitted} />
          Submitted
        </a>
        <a className="navbar-link" href="/ideas">
          <img className="navbar-img" src={ideas} />
          Ideas
        </a>
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
  } 
  else {
    return (
      <nav className="navbar-container">
       {/*  <a className="navbar-link" href="/submitIdea">
          <img className="navbar-img" src={addIdea} />
          Create new Idea
        </a> */}
        <a className="navbar-link" href="/assigned">
          <img className="navbar-img" src={assigned} />
          Assigned
        </a>
        <a className="navbar-link" href="/submitted">
          <img className="navbar-img" src={submitted} />
          Submitted
        </a>
        <a className="navbar-link" href="/ideas">
          <img className="navbar-img" src={ideas} />
          Ideas
        </a>
        <a className="navbar-link" href="/archived">
          <img className="navbar-img" src={archived} />
          Archived
        </a>
        <a className="navbar-link" href="/employees">
          <img className="navbar-img" src={teamUp} />
          Team Up
        </a>
        
      </nav>
    );
  }
}

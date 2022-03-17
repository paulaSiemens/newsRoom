import addIdeaIcon from "../../../resources/icons/icon-ideas.svg";
import assignedIcon from "../../../resources/icons/icon-assigned.svg";
import unassignedIcon from "../../../resources/icons/icon-uassigned.svg";
import submittedIcon from "../../../resources/icons/icon-submitted.svg";
import archivedIcon from "../../../resources/icons/icon-archived.svg";
import employeesIcon from "../../../resources/icons/icon-team-up.svg";
import teamUpIcon from "../../../resources/icons/icon-team-up.svg";
import Db from "../../../Db";
import Navlink from "./Navlink";

import React from "react";

export default function SideNav() {
  if (Db.getUserRole() == "Editor") {
    return (
      <nav className="navbar-container">
        <Navlink 
          link="assigned"
          icon={assignedIcon}
          linkName="Assigned"        
        />
        <Navlink 
          link="unassigned"
          icon={unassignedIcon}
          linkName="Unassigned"        
        />
        <Navlink 
          link="submitted"
          icon={submittedIcon}
          linkName="Submitted"        
        />
        <Navlink 
          link="archived"
          icon={archivedIcon}
          linkName="Archived"        
        />
        <Navlink 
          link="employees"
          icon={employeesIcon}
          linkName="Employees"        
        />

        <div className="navbar-filler"></div> {/*FIXME: navbar filler*/}
      </nav>
    );
  } 
  else {
    return (
      <nav className="navbar-container">
        <Navlink 
          link="idea"
          icon={addIdeaIcon}
          linkName="Create Idea"        
        />
        <Navlink 
          link="assigned"
          icon={assignedIcon}
          linkName="Assigned"        
        />
        <Navlink 
          link="submitted"
          icon={submittedIcon}
          linkName="Submitted"        
        />
             
        
        <Navlink 
          link="archived"
          icon={archivedIcon}
          linkName="Archived"        
        />
        <Navlink 
          link="employees"
          icon={teamUpIcon}
          linkName="Team Up"        
        />
        <div className="navbar-filler"></div>
      </nav>
    );
  }
}

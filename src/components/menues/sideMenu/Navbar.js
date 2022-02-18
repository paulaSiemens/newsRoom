import addIdeaIcon from "../../../resources/icons/icon-add.png";
import assignedIcon from "../../../resources/icons/icon-assigned.png";
import unassignedIcon from "../../../resources/icons/icon-unassigned.png";
import submittedIcon from "../../../resources/icons/icon-submitted.png";
import archivedIcon from "../../../resources/icons/icon-archived.png";
import employeesIcon from "../../../resources/icons/icon-employees.png";
import teamUpIcon from "../../../resources/icons/icon-team-up.png";
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
  } else {
    return (
      <nav className="navbar-container">
        <Navlink 
          link="submitIdea"
          icon={addIdeaIcon}
          linkName="Create New Idea"        
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
          link="employees"
          icon={employeesIcon}
          linkName="Employees"        
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

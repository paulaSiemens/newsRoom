import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Db from "../Db";
import iconArchived from "../resources/icons/icon-assigned.png";
import iconSearch from "../resources/icons/icon-search.png";
import iconArtSmall from "../resources/icons/icon-articlesize-small.png";
import iconArtMedium from "../resources/icons/icon-articlesize-medium.png";
import iconArtLarge from "../resources/icons/icon-articlesize-large.png";
import iconArtALL from "../resources/icons/icon-articlesize-ALL.png";

export default function Submitted() {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    Db.getArchived(setIdeas);
  }, []);

  if (!ideas) {
    return <p>Loading...</p>;
  }

  if (Db.getUserRole() === "Editor") {
    return (
      <>
        <div className="container-page" >
          <h1><img src={iconArchived} />Archived</h1>
          <div className="container-searchRow">
            <div className="searchbar">
            <img src={iconSearch} />
            search ...  
            </div>
            <div className="icon-container">
              <img src={iconArtSmall} />
              <img src={iconArtMedium} />
              <img src={iconArtLarge} />
              <img src={iconArtALL} />
            </div>
         </div>
         <div className="accTable-header">
           <p>Title</p>
         </div>
        <Accordion defaultActiveKey="0">
          {ideas.map((idea, i) => (
            <>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  <b>{idea.get("title")}</b>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="acc-img"
                    src={idea.get("image").url()}
                    alt="illustration expressing the idea"
                  />
                  <br />
                  <br />
                  {idea.get("description")}
                  <br />
                  <br />
                  Owner: <b>{idea.get("owner").get("username")}</b>
                  <br />
                  <b>Date Archived:</b> <i>{" " + idea.get("updatedAt")}</i>
                  <br />
                  <br />
                </Accordion.Body>
              </Accordion.Item>
            </>
          ))}
        </Accordion>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container-page" >
          <h1><img src={iconArchived} />Archived</h1>
          <div className="container-searchRow">
            <div className="searchbar">
            <img src={iconSearch} />
            search ...  
            </div>
            <div className="icon-container">
              <img src={iconArtSmall} />
              <img src={iconArtMedium} />
              <img src={iconArtLarge} />
              <img src={iconArtALL} />
            </div>
         </div>
         <div className="accTable-header">
           <p>Title</p>
         </div>
        <Accordion defaultActiveKey="0">
          {ideas
            .filter((idea) => idea.get("owner").id === Db.getUserId())
            .map((idea, i) => (
              <>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                    <b>{idea.get("title")}</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img
                      className="acc-img"
                      src={idea.get("image").url()}
                      alt="illustration expressing the idea"
                    />
                    <br />
                    <br />
                    {idea.get("description")}
                    <br />
                    <br />
                    <b>Date Archived:</b> <i>{" " + idea.get("updatedAt")}</i>
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </>
            ))}
        </Accordion>
        </div>
      </>
    );
  }
}

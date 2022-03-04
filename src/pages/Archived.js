import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import Db from "../Db";
import iconArchived from "../resources/icons/icon-assigned.svg";
import iconSearch from "../resources/icons/icon-search.svg";


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
        <Container className="container-page" >
          <div className="container-page-header">

            <h1><img src={iconArchived} />Archived</h1>

      
          </div> 
          <div className="container-page-body">
         
              <div className="searchbar">
                <img src={iconSearch} />
                  search ...  
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
        
        </Container>

      </>
    );
  }
}

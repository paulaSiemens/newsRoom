import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "../Db";
import iconSubmitted from "../resources/icons/icon-submitted.png";
import iconSearch from "../resources/icons/icon-search.png";


export default function Submitted() {
  const [ideas, setIdeas] = useState();
  const [archived, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getSubmitted(setIdeas);
  }, [archived]);

  if (!ideas) {
    return <p>Loading...</p>;
  }

  if (Db.getUserRole() === "Editor") {
    return (
      <>
        <div className="container-page" >
          <h1><img src={iconSubmitted} />Submitted</h1>
          
            <div className="searchbar">
            <img src={iconSearch} />
            search ...  
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
                  <b>Date Submitted:</b> <i>{" " + idea.get("updatedAt")}</i>
                  <br />
                  <br />
                  <Form>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        Db.handleArchived(idea, forceUpdate);
                      }}
                      variant="primary"
                      type="submit"
                    >
                      Archive
                    </Button>
                  </Form>
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
           <h1><img src={iconSubmitted} />Submitted</h1>
          
            <div className="searchbar">
            <img src={iconSearch} />
            search ...  
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
                    <b>Date Submitted:</b> <i>{" " + idea.get("updatedAt")}</i>
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

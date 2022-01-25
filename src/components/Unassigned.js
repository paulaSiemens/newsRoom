import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "./Db";
import iconUnassigned from "../images/icon-unassigned.png";
import iconSearch from "../images/icon-search.png";
import iconArtSmall from "../images/icon-articlesize-small.png";
import iconArtMedium from "../images/icon-articlesize-medium.png";
import iconArtLarge from "../images/icon-articlesize-large.png";
import iconArtALL from "../images/icon-articlesize-ALL.png";

export default function Unassigned() {
  const [ideas, setIdeas] = useState();
  const [userEmail, setUserEmail] = useState();
  const [deadline, setDeadline] = useState();
  const [assigned, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getUnassigned(setIdeas);
  }, [assigned]);

  if (!ideas) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container-page" >
          <h1><img src={iconUnassigned} />Unassigned</h1>
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
                {idea.get("description")}
                <br />
                <br />
                <b>Date Created:</b> <i>{" " + idea.get("updatedAt")}</i>
                <br />
                <br />
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                      }}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control
                      type="date"
                      onChange={(e) => {
                        setDeadline(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      Db.handleAssigned(userEmail, idea, deadline, forceUpdate);
                    }}
                    variant="primary"
                    type="submit"
                  >
                    Assign
                  </Button>
                </Form>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </>
        ))}
      </Accordion>
      </div>
    </>
  );
}

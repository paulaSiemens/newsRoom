import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Db from "../Db";
import iconUnassigned from "../resources/icons/icon-uassigned.svg";
import iconSearch from "../resources/icons/icon-search.svg";

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
      <main className="main" >
      <h1 className="main-title">
        <img className="main-img" src={iconUnassigned} />
        Unassigned
      </h1>
         
      <div className="searchbar">
        <img src={iconSearch} />
          search ...  
      </div>
         
      <Link to="/ideas">
      <Button className="btn-primary"> Select Idea </Button>
      </Link>

      <div className="acc-header">
        <p>Title</p>
      </div>
      
      <Accordion 
        className="acc-table"
        defaultActiveKey="0">
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

    </main>
      
    </>
  );
}

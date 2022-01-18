import { useEffect, useState, useReducer } from "react";
import Parse from "parse";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "./Db";

export default function Selection() {
  const [ideas, setIdeas] = useState();
  const [ideaId, setIdeaId] = useState();
  const [userEmail, setUserEmail] = useState();
  const [assigned, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getUnassigned(setIdeas);
  }, [assigned]);

  if (!ideas) {
    return <p>Loading...</p>;
  }

  return (
    <>
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
                {idea.get("description")}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                        setIdeaId(idea);
                      }}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      Db.handleAssigned(userEmail, ideaId, forceUpdate);
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
    </>
  );
}

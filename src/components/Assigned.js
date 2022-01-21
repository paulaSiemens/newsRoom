import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "./Db";
import { useNavigate } from "react-router";

export default function Assigned() {
  const [assignments, setAssignments] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageName, setImageName] = useState();
  const [imageData, setImageData] = useState();
  const [submitted, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getAssigned(setAssignments);
  }, [submitted]);

  if (!assignments) {
    return <p>Loading...</p>;
  }
  if (Db.getUserRole() === "Editor") {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {assignments.map((assignment, i) => (
            <>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  <b>{assignment.get("ideaId").get("title")}</b>
                </Accordion.Header>
                <Accordion.Body>
                  {assignment.get("ideaId").get("description")}
                  <br />
                  <br />
                  Owner: <b>{assignment.get("userId").get("username")}</b>
                  <br />
                  <b>Date Assigned:</b>{" "}
                  <i>{" " + assignment.get("updatedAt")}</i>
                  <br />
                  <br />
                </Accordion.Body>
              </Accordion.Item>
            </>
          ))}
        </Accordion>
      </>
    );
  } else {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {assignments
            .filter(
              (assignment) => assignment.get("userId").id === Db.getUserId()
            )
            .map((assignment, i) => (
              <>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                    <b>{assignment.get("ideaId").get("title")}</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    {assignment.get("ideaId").get("description")}
                    <br />
                    <br />
                    <b>Date Assigned:</b>{" "}
                    <i>{" " + assignment.get("updatedAt")}</i>
                    <Form>
                      <Form className="cont--submitIdea">
                        {/* title and idea forms are mostly the same - should be refactored to avoid duplicating code  */}
                        <Form.Group className="mb-3" controlId="formBasicImage">
                          <Form.Label>Image</Form.Label>
                          <Form.Control
                            type="file"
                            onChange={(e) => {
                              setImageName(e.target.files[0].name);
                              setImageData(e.target.files[0]);
                            }}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicUsername"
                        >
                          <Form.Label>Article title</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Your article</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Insert your article here"
                          />
                        </Form.Group>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            Db.handleSubmitted(
                              imageName,
                              imageData,
                              title,
                              description,
                              assignment,
                              forceUpdate
                            );
                          }}
                          variant="primary"
                          type="submit"
                        >
                          Submit article
                        </Button>
                      </Form>
                    </Form>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </>
            ))}
        </Accordion>
      </>
    );
  }
}

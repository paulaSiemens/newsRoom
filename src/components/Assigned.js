import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "./Db";

export default function Assigned() {
  const [assignments, setAssignments] = useState();
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
                  <img
                    className="acc-img"
                    src={assignment.get("ideaId").get("image").url()}
                    alt="illustration expressing the idea"
                  />
                  <br />
                  <br />
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
                    <img
                      className="acc-img"
                      src={assignment.get("ideaId").get("image").url()}
                      alt="illustration expressing the idea"
                    />
                    <br />
                    <br />
                    {assignment.get("ideaId").get("description")}
                    <br />
                    <br />
                    <b>Date Assigned:</b>{" "}
                    <i>{" " + assignment.get("updatedAt")}</i>
                    <br />
                    <br />
                    <Form>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          Db.handleSubmitted(assignment, forceUpdate);
                        }}
                        variant="primary"
                        type="submit"
                      >
                        Submit
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
}

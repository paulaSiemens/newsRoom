import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "./Db";

export default function Assigned() {
  const [assignments, setAssignments] = useState();
  const [submitted, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getAssigned(setAssignments);
  }, [submitted]);

  async function handleSubmitted(e, assignment) {
    e.preventDefault();
    const idea = assignment.get("ideaId");
    try {
      idea.set("status", "Submitted").save();
      assignment.destroy().then((submittedIdea) => {
        alert('You submitted "' + idea.get("title") + '"');
        forceUpdate();
      });
    } catch (error) {
      alert(error);
    }
  }

  if (!assignments) {
    return <p>Loading...</p>;
  }

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
                Assigned to: <b>{assignment.get("userId").get("username")}</b>
                <br />
                <Form>
                  <Button
                    onClick={(e) => handleSubmitted(e, assignment)}
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

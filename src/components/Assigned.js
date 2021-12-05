import { useEffect, useState } from "react";
import Parse from "parse";
import { Accordion, Form, Button } from "react-bootstrap";

export default function Assigned() {
  const [assignments, setAssignments] = useState();

  useEffect(() => {
    const Assigned = Parse.Object.extend("Assigned");
    const AssignedQuery = new Parse.Query(Assigned);
    AssignedQuery.equalTo("status", "Assigned");
    AssignedQuery.include("ideaId");
    AssignedQuery.include("userId");
    AssignedQuery.find().then((assignments) => {
      setAssignments(assignments);
      console.log(assignments);
    });
  }, [assignments]);


  async function handleSubmitted(e, assignment) {
    e.preventDefault();
    const idea = assignment.get("ideaId");
    try {
      assignment.destroy();
      alert('You submitted "' + idea.get("title") + '"');
      idea.set("status", "Submitted").save();
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
            <Accordion.Header><b>{assignment.get("ideaId").get("title")}</b></Accordion.Header>
            <Accordion.Body>
              
            <img
              src={assignment.get("ideaId").get("image").url()}
              alt="illustration expressing the idea"
            />
            <br />
            Assigned to: <b>{assignment.get("userId").get("username")}</b>
            <br />
            <Form>
            <Button onClick={(e) => handleSubmitted(e, assignment)} variant="primary" type="submit">
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

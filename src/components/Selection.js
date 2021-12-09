import { useEffect, useState, useReducer } from "react";
import Parse from "parse";
import { Accordion, Form, Button } from "react-bootstrap";

export default function Selection() {
  const [ideas, setIdeas] = useState();
  const [ideaId, setIdeaId] = useState();
  const [userEmail, setUserEmail] = useState();
  const [assigned, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const Idea = Parse.Object.extend("Idea");
    const IdeaQuery = new Parse.Query(Idea);
    IdeaQuery.equalTo("status", "Unassigned");
    IdeaQuery.find().then((ideas) => {
      console.log(ideas);
      setIdeas(ideas);
    }); 
  }, [assigned]);

  async function handleAssigned(e) {
    e.preventDefault();

    const Assigned = Parse.Object.extend("Assigned");
    const newAssigned = new Assigned();
    const UserQuery = new Parse.Query(Parse.User);
    UserQuery.equalTo("username", userEmail);
    UserQuery.find().then((user) => {
      console.log(user[0].id);
      newAssigned.set("userId", user[0]);
      newAssigned.set("ideaId", ideaId);
      ideaId.set("status", "Assigned");
      try {
         newAssigned.save();
         ideaId.save().then((assignedIdea) => {
          alert('You assigned "' + ideaId.get('title') + '" to the user with the email ' + userEmail);
          forceUpdate();
        });
      } catch (error) {
        alert(error);
      }
    }); 
  }

  if (!ideas) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Accordion defaultActiveKey="0">
        {ideas.map((idea, i) => (
          <>
            <Accordion.Item eventKey={i}>
            <Accordion.Header><b>{idea.get("title")}</b></Accordion.Header>
            <Accordion.Body>
            <img className="acc-img"
              src={idea.get("image").url()}
              alt="illustration expressing the idea"
            />
            <br />
            {idea.get("description")}
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={(e) => {setUserEmail(e.target.value); setIdeaId(idea)}} placeholder="Enter email" />
        </Form.Group>
        <Button onClick={handleAssigned} variant="primary" type="submit">
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

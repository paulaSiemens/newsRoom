import { useEffect, useState } from "react";
import Parse from "parse";
import { Accordion, Form, Button } from "react-bootstrap";

export default function Submitted() {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    const Idea = Parse.Object.extend("Idea");
    const IdeaQuery = new Parse.Query(Idea);
    IdeaQuery.equalTo("status", "Submitted");
    IdeaQuery.find().then((ideas) => {
      console.log(ideas);
      setIdeas(ideas);
    }); 
  }, [ideas]);


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
            <img
              src={idea.get("image").url()}
              alt="illustration expressing the idea"
            />
            <br />
            {idea.get("description")}
            <br />
            <Form>
            <Button onClick={() => {idea.set("status", "Archived").save(); alert('You archived "' + idea.get('title') + '"');}} variant="primary" type="submit">
          Archive
        </Button>
        </Form>
            </Accordion.Body>
            </Accordion.Item>
            </>
        ))}
     </Accordion>
    </>
  );
}

import { useEffect, useState, useReducer } from "react";
import Parse from "parse";
import { Accordion, Form, Button } from "react-bootstrap";

export default function Submitted() {
  const [ideas, setIdeas] = useState();
  const [archived, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const Idea = Parse.Object.extend("Idea");
    const IdeaQuery = new Parse.Query(Idea);
    IdeaQuery.equalTo("status", "Submitted");
    IdeaQuery.find().then((ideas) => {
      console.log(ideas);
      setIdeas(ideas);
    }); 
  }, [archived]);

  async function handleArchived(e, idea) {
    e.preventDefault();
    try {
      idea.set("status", "Archived").save().then((archivedIdea) => {
        alert('You archived "' + idea.get('title') + '"');
        forceUpdate();
      });
   } catch (error) {
     alert(error);
   }
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
            <img
              src={idea.get("image").url()}
              alt="illustration expressing the idea"
            />
            <br />
            {idea.get("description")}
            <br />
            <Form>
            <Button onClick={(e) => {handleArchived(e, idea)}} variant="primary" type="submit">
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

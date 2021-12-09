import { useEffect, useState } from "react";
import Parse from "parse";
import { Accordion, Form, Button } from "react-bootstrap";

export default function Submitted() {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    const Idea = Parse.Object.extend("Idea");
    const IdeaQuery = new Parse.Query(Idea);
    IdeaQuery.equalTo("status", "Archived");
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
            <img className="acc-img"
              src={idea.get("image").url()}
              alt="illustration expressing the idea"
            />
            <br />
            {idea.get("description")}
            <br />
            </Accordion.Body>
            </Accordion.Item>
            </>
        ))}
     </Accordion>
    </>
  );
}

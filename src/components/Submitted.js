import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Db from "./Db";

export default function Submitted() {
  const [ideas, setIdeas] = useState();
  const [archived, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getSubmitted(setIdeas);
  }, [archived]);

  async function handleArchived(e, idea) {
    e.preventDefault();
    try {
      idea
        .set("status", "Archived")
        .save()
        .then((archivedIdea) => {
          alert('You archived "' + idea.get("title") + '"');
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
                <br />
                <Form>
                  <Button
                    onClick={(e) => {
                      handleArchived(e, idea);
                    }}
                    variant="primary"
                    type="submit"
                  >
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

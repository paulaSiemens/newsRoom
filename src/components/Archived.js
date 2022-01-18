import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Db from "./Db";

export default function Submitted() {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    Db.getArchived(setIdeas);
  }, []);

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
              </Accordion.Body>
            </Accordion.Item>
          </>
        ))}
      </Accordion>
    </>
  );
}

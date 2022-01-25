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

  if (Db.getUserRole() === "Editor") {
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
                  <br />
                  {idea.get("description")}
                  <br />
                  <br />
                  Owner: <b>{idea.get("owner").get("username")}</b>
                  <br />
                  <b>Date Archived:</b> <i>{" " + idea.get("updatedAt")}</i>
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
          {ideas
            .filter((idea) => idea.get("owner").id === Db.getUserId())
            .map((idea, i) => (
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
                    <br />
                    {idea.get("description")}
                    <br />
                    <br />
                    <b>Date Archived:</b> <i>{" " + idea.get("updatedAt")}</i>
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </>
            ))}
        </Accordion>
      </>
    );
  }
}

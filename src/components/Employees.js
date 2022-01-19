import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Db from "./Db";

export default function Submitted() {
  const [users, setUsers] = useState();

  useEffect(() => {
    Db.getUsers(setUsers);
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }

  if (Db.getUserRole() === "Editor") {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {users.map((user, i) => (
            <>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  <b>{user.get("username")}</b>
                </Accordion.Header>
                <Accordion.Body>
                  Role:
                  <b>{" " + user.get("role")}</b>
                  <br />
                  Availability:
                  <b>{" " + user.get("Availability")}</b>
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
          {users
            .filter((user) => user.get("Availability") === "Available")
            .map((user, i) => (
              <>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                    <b>{user.get("username")}</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    Role:
                    <b>{" " + user.get("role")}</b>
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

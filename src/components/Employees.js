import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{user.id}</th>
                <th>{user.get("username")}</th>

                <th>
                  {" " + user.get("role")}
                  <br />
                </th>
                <th>
                  {" " + user.get("Availability")}
                  <br />
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{user.id}</th>
                <th>{user.get("username")}</th>

                <th>
                  {" " + user.get("role")}
                  <br />
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

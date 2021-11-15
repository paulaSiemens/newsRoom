import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleLoginAttempt() {
    console.log(username);
    console.log(password);
  }

  return (
    <>
      <br />
      <br />
      <Form>
        {/* username and password forms are mostly the same - should be refactored to avoid duplicating code  */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleLoginAttempt} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

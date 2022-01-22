import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Db from "./Db";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div className="canvas">
      <>
        <Form className="cont--login">
          {/* username and password forms are mostly the same - should be refactored to avoid duplicating code  */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
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
          <Button
            onClick={(e) => {
              e.preventDefault();
              Db.handleLoginAttempt(email, password, navigate);
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </>
    </div>
  );
}

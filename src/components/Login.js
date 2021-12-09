import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import { useNavigate } from "react-router";
import logo from "../images/logo-brand.png";
import "./Start.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleLoginAttempt(e) {
    e.preventDefault();

    console.log(email);
    console.log(password);
    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(email);
    user.logIn().then((loggedInUser) => {
      navigate("/assigned");
      window.location.reload(false);
    });
  }
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
        <Button onClick={handleLoginAttempt} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
    </div>
  );
}

import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const navigate = useNavigate();

   async function handleSignupAttempt(e) {
    e.preventDefault();

    const User = Parse.Object.extend("User");
    const newUser = new User();
    newUser.set("username", email);
    newUser.set("email", email);
    newUser.set("password", password);
    newUser.set("role", role);
    console.log(email);
    console.log(password);
    console.log(role);
    try {
      await newUser.save();
      navigate("/login");
      window.location.reload(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <br />
      <br />
      <Form className="cont--login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole"  onChange={(e) => setRole(e.target.value)}>
          <Form.Label>Role</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="Journalist">Journalist</option>
            <option value="Photographer">Photographer</option>
            <option value="Editor">Editor</option>
          </Form.Select>
        </Form.Group>
        <Button onClick={handleSignupAttempt} variant="primary" type="submit">
          Sign up
        </Button>
      </Form>{" "}
    </>
  );
}

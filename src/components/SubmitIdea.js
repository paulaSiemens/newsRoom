import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Db from "./Db";
import { useNavigate } from "react-router";

export default function SubmitIdea() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  return (
    <>
      <Form className="cont--submitIdea">
        {/* title and idea forms are mostly the same - should be refactored to avoid duplicating code  */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your idea</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Start typing your idea here"
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            Db.handleIdea(title, description);
          }}
          variant="primary"
          type="submit"
        >
          Submit idea
        </Button>
      </Form>
    </>
  );
}

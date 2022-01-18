import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Db from "./Db";
import { useNavigate } from "react-router";

export default function SubmitIdea() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageName, setImageName] = useState();
  const [imageData, setImageData] = useState();
  const navigate = useNavigate();

  return (
    <>
      <Form className="cont--submitIdea">
        {/* title and idea forms are mostly the same - should be refactored to avoid duplicating code  */}
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              setImageName(e.target.files[0].name);
              setImageData(e.target.files[0]);
            }}
          />
        </Form.Group>
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
            Db.handleIdea(imageName, imageData, title, description, navigate);
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

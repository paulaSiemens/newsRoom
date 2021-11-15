import { useState } from "react";
import Parse from "parse";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export function SubmitIdea() {
  const [title, setTitle] = useState();
  const [ideaDescription, setIdeaDescription] = useState();
  const navigate = useNavigate();

  async function handleIdea(e) {
    e.preventDefault();

    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();
    newIdea.set("title", title);
    newIdea.set("ideaDescription", ideaDescription);
    newIdea.set("user", Parse.User.current());
    try {
      const newIdeaReference = await newIdea.save();
    } catch (error) {
      alert(error);
    }
  }


  return (
    <>
      <Form>
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
            onChange={(e) => setIdeaDescription(e.target.value)}
            placeholder="Start typing your idea here"
          />
          <Button onClick={handleIdea} variant="primary" type="submit">
            Submit idea
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

import { useState } from "react";
import Parse from "parse";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SubmitIdea() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  async function handleIdea(e) {
    e.preventDefault();

    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();
    newIdea.set("title", title);
    newIdea.set("description", description);
    newIdea.set("user", Parse.User.current());
    image.name = title;
    newIdea.set("image", image);
    try {
      await newIdea.save();
      alert('You submitted "' + title + '" as an article suggestion');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Form className="cont--submitIdea">
        {/* title and idea forms are mostly the same - should be refactored to avoid duplicating code  */}
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) =>
              setImage(
                new Parse.File(e.target.files[0].name, e.target.files[0])
              )
            }
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
        <Button onClick={handleIdea} variant="primary" type="submit">
          Submit idea
        </Button>
      </Form>
    </>
  );
}

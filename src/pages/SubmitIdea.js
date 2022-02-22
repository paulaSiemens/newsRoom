import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Db from "../Db";
import { useNavigate } from "react-router";

export default function SubmitIdea() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  function createRandomIdea(assignment) {
    let theRandomNumber = Math.floor(Math.random() * 10) + 1;
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "sources=bbc-news&" +
      "apiKey=5d2b580655db4a1c8ad915b62f7908c3";

    let req = new Request(url);
    fetch(req).then((response) => {
      response.json().then((result) => {
        setTitle(result.articles[theRandomNumber].title);
        setDescription(result.articles[theRandomNumber].description);
      });
    });
  }

  return (
    <>
      <Form className="cont--submitIdea">
        <Button
          onClick={(e) => {
            e.preventDefault();
            createRandomIdea();
          }}
          variant="primary"
          type="submit"
        >
          Upload idea
        </Button>
        <br />
        <br />
        {/* title and idea forms are mostly the same - should be refactored to avoid duplicating code  */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your idea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={description}
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

import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import { Page} from '../components/index';
import {TitleBar } from '../components/index';
import Db from "../Db";
import iconAssigned from "../resources/icons/icon-assigned.svg";
import iconSearch from "../resources/icons/icon-search.svg";
import iconArtSmall from "../resources/icons/icon-articlesize-small.png";
import iconArtMedium from "../resources/icons/icon-articlesize-medium.png";
import iconArtLarge from "../resources/icons/icon-articlesize-large.png";
import iconArtALL from "../resources/icons/icon-articlesize-ALL.png";

export default function Assigned() {
  const [assignments, setAssignments] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageName, setImageName] = useState();
  const [imageData, setImageData] = useState();
  const [submitted, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getAssigned(setAssignments);
  }, [submitted]);

  if (!assignments) {
    return <p>Loading...</p>;
  }

  if (Db.getUserRole() === "Editor") {
    return (
      <>
        {/* TODO: replace with grid */}
        <Page>
          <Page.Wrapper>
            <Page.Header>

              <Page.Title><Page.Item src={iconAssigned} />Assigned</Page.Title>

            </Page.Header> 
            <Page.Body>
                <Page.Inliner>
                  <div className="searchbar">
                    <img src={iconSearch} alt=" " />
                        search ...  
                  </div>
          
                  <Page.IconContainer>
                    <Page.Item src={iconArtSmall} />
                    <Page.Item src={iconArtMedium} />
                    <Page.Item src={iconArtLarge} />
                    <Page.Item src={iconArtALL} />
                  </Page.IconContainer>
                </Page.Inliner>
          
              
                <TitleBar.Header>
                  <TitleBar.Text>Title</TitleBar.Text>
                </TitleBar.Header>
                
            
         
            <Accordion className="accordion" defaultActiveKey="0">
              {assignments.map((assignment, i) => (
                <>
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>
                      <b>{assignment.get("ideaId").get("title")}</b>
                    </Accordion.Header>
                    <p className="deadline">
                      <b>Deadline:</b>
                      <i>{" " + assignment.get("deadline")}</i>
                    </p>
                    <Accordion.Body>
                      {assignment.get("ideaId").get("description")}
                      <br />
                      <br />
                      Owner: <b>{assignment.get("userId").get("username")}</b>
                      <br />
                      <b>Date Assigned:</b>{" "}
                      <i>{" " + assignment.get("updatedAt")}</i>
                      <br />
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                
              </>
            
            ))}
            </Accordion>
          </Page.Body>
          </Page.Wrapper>
        </Page>
      </>
    );
  } else {
    return (
      <>
       <Page >
        <Page.Wrapper>
          <Page.Header>

            <Page.Title><Page.Item src={iconAssigned} />Assigned</Page.Title>

          </Page.Header>
          
          <Page.Body>
          <Page.Inliner>
                  <div className="searchbar">
                    <img src={iconSearch} alt=" " />
                        search ...  
                  </div>
          
                  <Page.IconContainer>
                    <Page.Item src={iconArtSmall} />
                    <Page.Item src={iconArtMedium} />
                    <Page.Item src={iconArtLarge} />
                    <Page.Item src={iconArtALL} />
                  </Page.IconContainer>
                </Page.Inliner>
         

          <TitleBar.Header>
            <TitleBar.Text>Title</TitleBar.Text>
          </TitleBar.Header>

          <Accordion defaultActiveKey="0">
            {assignments
              .filter(
                (assignment) => assignment.get("userId").id === Db.getUserId()
              )
              .map((assignment, i) => (
                <>
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>
                      <b>{assignment.get("ideaId").get("title")}</b>
                    </Accordion.Header>
                    Deadline:
                    <i>{" " + assignment.get("deadline")}</i>
                    <Accordion.Body>
                      {assignment.get("ideaId").get("description")}
                      <br />
                      <br />
                      <b>Date Assigned:</b>{" "}
                      <i>{" " + assignment.get("updatedAt")}</i>
                      <br />
                      <br />
                      <Form>
                        <Form className="cont--submitArticle">
                          <b>Submit article</b>
                          <br />
                          <br />
                          {/* title and idea forms are mostly the same - should be refactored to avoid duplicating code  */}
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicImage"
                          >
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={(e) => {
                                setImageName(e.target.files[0].name);
                                setImageData(e.target.files[0]);
                              }}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicUsername"
                          >
                            <Form.Label>Article title</Form.Label>
                            <Form.Control
                              type="text"
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Your article</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={8}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder="Insert your article here"
                            />
                          </Form.Group>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              Db.handleSubmitted(
                                imageName,
                                imageData,
                                title,
                                description,
                                assignment,
                                forceUpdate
                              );
                            }}
                            variant="primary"
                            type="submit"
                          >
                            Submit
                          </Button>
                          <br />
                        </Form>
                      </Form>{" "}
                    </Accordion.Body>
                  </Accordion.Item>
                  
                </>
              ))}
          </Accordion>
          </Page.Body>
          </Page.Wrapper>
          </Page>
      </>
    );
  }
}

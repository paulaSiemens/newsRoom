import { useEffect, useState, useReducer } from "react";
import { Accordion, Form, Button,Container} from "react-bootstrap";
import { Page} from '../components/index';
import { TitleBar } from '../components/index';
import Db from "../Db";
import iconSubmitted from "../resources/icons/icon-submitted.svg";
import iconSearch from "../resources/icons/icon-search.svg";


export default function Submitted() {
  const [ideas, setIdeas] = useState();
  const [archived, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    Db.getSubmitted(setIdeas);
  }, [archived]);

  if (!ideas) {
    return <p>Loading...</p>;
  }

  if (Db.getUserRole() === "Editor") {
    return (
      <>
        <Page>
          <Page.Wrapper>

            <Page.Header>
              <Page.Title><Page.Item src={iconSubmitted} />Submitted</Page.Title>
            </Page.Header> 
            
            <Page.Body>
                <Page.Inliner>
                <div className="container-searchRow">
                  <div className="searchbar">
                  <img src={iconSearch} alt=" "/>
                    search ...  
                  </div>
                </div>
                </Page.Inliner>

                  <TitleBar.Header>
                  <TitleBar.Text>Title</TitleBar.Text>
                </TitleBar.Header>
      
        <Accordion defaultActiveKey="0">
          {ideas.map((idea, i) => (
            <>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  <b>{idea.get("title")}</b>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="acc-img"
                    src={idea.get("image").url()}
                    alt="illustration expressing the idea"
                  />
                  <br />
                  <br />
                  {idea.get("description")}
                  <br />
                  <br />
                  Owner: <b>{idea.get("owner").get("username")}</b>
                  <br />
                  <b>Date Submitted:</b> <i>{" " + idea.get("updatedAt")}</i>
                  <br />
                  <br />
                  <Form>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        Db.handleArchived(idea, forceUpdate);
                      }}
                      variant="primary"
                      type="submit"
                    >
                      Archive
                    </Button>
                  </Form>
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
         <Page>
          <Page.Wrapper>

            <Page.Header>
              <Page.Title><Page.Item src={iconSubmitted} />Submitted</Page.Title>
            </Page.Header> 
            
            <Page.Body>
              <Page.Inliner>
            
              <div className="searchbar">
                <img src={iconSearch} alt=" "/>
                    search ...  
              </div>
              </Page.Inliner>
              <TitleBar.Header>
                  <TitleBar.Text>Title</TitleBar.Text>
                </TitleBar.Header>
      

          

       
        
         <Accordion defaultActiveKey="0">
          {ideas
            .filter((idea) => idea.get("owner").id === Db.getUserId())
            .map((idea, i) => (
              <>
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                    <b>{idea.get("title")}</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img
                      className="acc-img"
                      src={idea.get("image").url()}
                      alt="illustration expressing the idea"
                    />
                    <br />
                    <br />
                    {idea.get("description")}
                    <br />
                    <br />
                    <b>Date Submitted:</b> <i>{" " + idea.get("updatedAt")}</i>
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
  }
}

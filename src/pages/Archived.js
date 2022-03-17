import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { Page} from '../components/index';
import { TitleBar } from '../components/index';
import Db from "../Db";
import iconArchived from "../resources/icons/icon-assigned.svg";
import iconSearch from "../resources/icons/icon-search.svg";


export default function Submitted() {
  const [ideas, setIdeas] = useState();

  useEffect(() => {
    Db.getArchived(setIdeas);
  }, []);

  if (!ideas) {
    return <p>Loading...</p>;
  }

  if (Db.getUserRole() === "Editor") {
    return (
      <>
          <Page>
          <Page.Wrapper>

            <Page.Header>
              <Page.Title><Page.Item src={iconArchived} />Archived</Page.Title>
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
                  <b>Date Archived:</b> <i>{" " + idea.get("updatedAt")}</i>
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
       <Page>
          <Page.Wrapper>

            <Page.Header>
              <Page.Title><Page.Item src={iconArchived} />Archived</Page.Title>
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
                    <b>Date Archived:</b> <i>{" " + idea.get("updatedAt")}</i>
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

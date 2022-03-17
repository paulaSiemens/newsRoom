
import { Button, Container } from "react-bootstrap";
import iconIdeas from "../resources/icons/icon-ideas.svg";
import iconSearch from "../resources/icons/icon-search.svg";
import { Page} from '../components/index';
import { TitleBar } from '../components/index';




export default function Ideas(){

   return( 
  
    <Page>
          <Page.Wrapper>

            <Page.Header>
              <Page.Title><Page.Item src={iconIdeas} />Ideas</Page.Title>
            </Page.Header> 
            
            <Page.Body>
                <Page.Inliner>
                <div className="container-searchRow">
                  <div className="searchbar">
                  <img src={iconSearch} alt=" "/>
                    search ...  
                  </div>
                </div>
         
        <a href="/idea" target="_blank">
        <Button className="btn-primary"> Create Idea </Button>
        </a>
        </Page.Inliner>

        <TitleBar.Header>
        <TitleBar.Text>Title</TitleBar.Text>
        </TitleBar.Header>

      
     
      </Page.Body>
    </Page.Wrapper>
    </Page>
      
    

     )}

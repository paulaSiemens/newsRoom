
import { Button, Container } from "react-bootstrap";
import iconIdeas from "../resources/icons/icon-ideas.svg";
import iconSearch from "../resources/icons/icon-search.svg";




export default function Ideas(){

   return( 
  
    <Container className="container-page" >
      <div className="container-page-header">

        <h1><img src={iconIdeas} />Ideas</h1>

      
      </div> 
      <div className="container-page-body">
         
        <div className="searchbar">
          <img src={iconSearch} />
              search ...  
        </div>
         
        <a href="/idea" target="_blank">
        <Button className="btn-primary"> Create Idea </Button>
        </a>

      </div>

      <div className="accTable-header">
        <p>Title</p>
      </div>
     
    </Container>
      
    

     )}

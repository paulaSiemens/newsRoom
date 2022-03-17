import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 0;
    width: 1000px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    @media only screen and (min-width: 600ppx) {
    }`;

 export const Wrapper = styled.div`
     
    `;

 export const Title = styled.p`
    font-family: 'roboto', sans-serif;
    color: #002B99;
    font-size: 24px;
    
    
    `; 

 export const Header = styled.div`
    margin-left: 50px;
    align-items: center;
	margin-top: 50px;`; 

 export const Item = styled.img`
    margin-right: 20px;`; 

 export const Body = styled.div` 
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-right: 40px;
    width: 90%;`;

 export const Inliner = styled.div`
    display: flex;
    align-items: center;
`;

 export const IconContainer = styled.div`display: flex;
    margin-left: auto;
    margin-right: 50px;
    height: fit-content;`;
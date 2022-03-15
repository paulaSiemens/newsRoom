import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    background-color: #5c88fa;
	height: 50px;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
    
`;

export const Title = styled.p`
    padding: 10px;
    color: #FFFFFF;
    font-size: 16px;
    font-family: "roboto", sans-serif;
    text-align: center;
   
`;
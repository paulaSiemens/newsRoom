import React from "react";
import {Body, Header, Item, Container} from './styles/accordion';

export default function Accordion({children,...restProps}){
    return <Container {...restProps}>{children}</Container> 

}

Accordion.Header = function AccordionHeader ({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Accordion.Item = function AccordionItem ({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Accordion.Body = function AccordionBody ({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}
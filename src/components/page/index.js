import React from 'react';
import {Container, Wrapper, Title, Header, Item, Body, Inliner, IconContainer} from "./styles/page"


export default function Page({children,...restProps}) {
    return <Container {...restProps}>{children}</Container> 
}

Page.Wrapper = function PageWrapper ({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Page.Title = function PageTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Page.Header = function PageHeader ({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}
Page.Item = function PageItem ({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}
Page.Body = function PageBody ({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}

Page.Inliner= function PageInliner ({ children, ...restProps }) {
    return <Inliner {...restProps}>{children}</Inliner>
}

Page.IconContainer = function PageIconContainer ({ children, ...restProps }) {
    return <IconContainer {...restProps}></IconContainer>
}
import React from 'react';
import {Container, Header, Text} from './styles/titlebar';

export default function TitleBar({children,...restProps}) {
    return <Container {...restProps}>{children}</Container> 
}
TitleBar.Header = function TitleBarHeader ({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}
TitleBar.Text = function TitleBarText ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
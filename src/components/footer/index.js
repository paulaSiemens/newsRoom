import React from 'react';
import { Container, Title } from './styles/footer';


export default function Footer({children,...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
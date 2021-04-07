import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 10%;

    color: ${props => props.theme.colours.text.default};
    background-color: ${props => props.theme.colours.surface.level1};
`

const FooterText = styled.span`
    flex: 1;
`

const FooterLinks = styled.div``

const FooterLink = styled(Link)`
    display: inline-block;
    padding: 0 0.5rem;

    color: ${props => props.theme.colours.text.default};
`


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; William Neild 2020</FooterText>
            <FooterLinks>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/projects">Projects</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
            </FooterLinks>
        </FooterContainer>
    )
}

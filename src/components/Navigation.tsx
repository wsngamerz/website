import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { Logo } from "../components/Logo";


const NavigationContainer = styled.nav`
    display: flex;
    height: 120px;
    padding: 0 9vw;

    background-color: ${props => props.theme.colours.surface.level1};
`

const NavigationSiteName = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
`

const NavigationLogo = styled(Logo)`
    display: block;
    width: 48px;
    height: 48px;
    margin-right: 1rem;
`

const NavigationSiteNameLink = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;

    color: ${props => props.theme.colours.text.default};
`

const NavigationLinks = styled.div`
    display: flex;
    align-items: center;
`

const NavigationLink = styled(Link)`
    padding: 0.5rem 1.5rem;
    margin: 0 0.4rem;

    background-color: ${props => props.theme.colours.surface.level2};
    color: ${props => props.theme.colours.text.default};

    &:last-child {
        margin-right: 0.8rem;
    }
`


export const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationSiteName>
                <NavigationLogo />
                <NavigationSiteNameLink to="/">William Neild</NavigationSiteNameLink>
            </NavigationSiteName>
            <NavigationLinks>
                <NavigationLink to="/about">About</NavigationLink>
                <NavigationLink to="/projects">Projects</NavigationLink>
                <NavigationLink to="/contact">Contact</NavigationLink>
                <NavigationLink to="/blog">Blog</NavigationLink>
            </NavigationLinks>
        </NavigationContainer>
    )
}

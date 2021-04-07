import React from "react"
import styled from "styled-components"

import { Link } from "react-router-dom"

import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { SkillsPanel } from "../components/SkillsPanel"
import { ProjectsPanel } from "../components/ProjectsPanel"
import { PostsPanel } from "../components/PostsPanel"
import { Footer } from "../components/Footer"


const HeaderTitle = styled.h1`
    font-size: 2rem;
    font-style: italic;

    color: ${props => props.theme.colours.text.default};
`

const HeaderText = styled.p`
    width: 75%;
    padding: 1rem 0;

    font-size: 1.2rem;
    font-weight: lighter;

    color: ${props => props.theme.colours.text.default};
`

const HeaderButton = styled(Link)`
    padding: 1rem 3rem;
    display: inline-block;
    border: none;
    cursor: pointer;
    text-decoration: none;

    font-size: 1rem;
    font-family: ${props => props.theme.fonts.default};

    color: ${props => props.theme.colours.text.default};
    background-color: ${props => props.theme.colours.surface.level3};
`


export const Home = () => {
    return (
        <>
            <Navigation />
            <Header>
                <HeaderTitle>Hey, my name is Will!</HeaderTitle>
                <HeaderText>
                    I'm a student / software developer / technology enthusiast based in Leeds, UK who loves to create
                    fun applications and games with code.
                </HeaderText>
                <HeaderButton to="/projects">My Projects</HeaderButton>
            </Header>
            <SkillsPanel />
            <ProjectsPanel />
            <PostsPanel />
            <Footer />
        </>
    )
}

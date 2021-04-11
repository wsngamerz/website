import React from "react"

import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { SkillsPanel } from "../components/SkillsPanel"
import { ProjectsPanel } from "../components/ProjectsPanel"
import { PostsPanel } from "../components/PostsPanel"
import { Footer } from "../components/Footer"


export const Home = () => {
    return (
        <>
            <Navigation />
            <Header title="Hey, my name is Will!" link="/projects" linkText="View my projects" large>
                I'm a student / software developer / technology enthusiast based in Leeds, UK who loves to create
                fun applications and games with code.
            </Header>
            <SkillsPanel />
            <ProjectsPanel />
            <PostsPanel />
            <Footer />
        </>
    )
}

import React from "react"
import styled from "styled-components"


const PanelHeader = styled.h2`
    margin: 0;
`

const SkillsPanelContainer = styled.div`
    padding: 2rem 10%;
    color: ${props => props.theme.colours.text.default};
    background-color: ${props => props.theme.colours.surface.level3};
`

const SkillsCategories = styled.div`
    display: flex;

    width: 100%;
`

const SkillsCategory = styled.div`
    flex: 1;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: ${props => props.theme.colours.surface.level4};

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`

const SkillsItem = styled.div`
    font-size: 1rem;
    padding: 0.2rem;
`

const SkillsItemNote = styled(SkillsItem)`
    font-size: 0.7rem;
`

export const SkillsPanel = () => {
    return (
        <SkillsPanelContainer>
            <PanelHeader>My Skills</PanelHeader>

            <SkillsCategories>
                <SkillsCategory>
                    <SkillsItem>HTML</SkillsItem>
                    <SkillsItem>CSS</SkillsItem>
                    <SkillsItem>JavaScript</SkillsItem>
                </SkillsCategory>
                <SkillsCategory>
                    <SkillsItem>node.js</SkillsItem>
                    <SkillsItem>npm</SkillsItem>
                    <SkillsItem>React</SkillsItem>
                    <SkillsItem>Express</SkillsItem>
                </SkillsCategory>
                <SkillsCategory>
                    <SkillsItem>C#</SkillsItem>
                    <SkillsItem>.NET</SkillsItem>
                </SkillsCategory>
                <SkillsCategory>
                    <SkillsItem>Linux</SkillsItem>
                    <SkillsItem>Python 3</SkillsItem>
                    <SkillsItemNote>I also know how to make a powerpoint with graphs and cool transitions!</SkillsItemNote>
                </SkillsCategory>
            </SkillsCategories>
        </SkillsPanelContainer>
    )
}

import React from "react"
import styled from "styled-components"


const PanelContainer = styled.div`
    background-color: ${props => props.theme.colours.surface.level2};
`


export const ProjectsPanel = () => {
    return (
        <PanelContainer>
            <h3>Projects Panel</h3>
        </PanelContainer>
    )
}

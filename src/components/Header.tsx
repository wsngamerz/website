import React, { FunctionComponent } from "react"
import styled from "styled-components"


const HeaderContainer = styled.header`
    display: block;
    width: 100vw;
    padding: 8rem 10%;
    box-sizing: border-box;

    background-color: ${props => props.theme.colours.surface.level2};
`


export const Header: FunctionComponent = ({ children }) => {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    )
}

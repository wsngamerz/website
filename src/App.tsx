import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import "firacode"

import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Projects} from "./pages/Projects"
import {Blog} from "./pages/Blog"

import {defaultTheme} from "./themes"


const GlobalStyles = createGlobalStyle`
    html, body, #root {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fonts.default};
        overflow-x: hidden;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 
`


export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/blog" element={<Blog />}/>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

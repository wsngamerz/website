import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import "firacode"
import "./index.css"
import "tailwindcss/tailwind.css"

import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Projects} from "./pages/Projects"
import {Blog} from "./pages/Blog"

import {defaultTheme} from "./themes"


export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
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

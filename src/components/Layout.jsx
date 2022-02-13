import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import GlobalStyle from "../globalstyles";
import defaultTheme from "../themes";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ location, brand, links, children }) => {
    const shortcodes = {};

    // gnerate the links array for the navbar
    const navLinks = links
        .filter(l => l.navbarHidden !== true)
        .map(l => {
            return { ...l, active: location.pathname === l.url };
        });

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <MDXProvider components={shortcodes}>
                    <Navbar brand={brand} links={navLinks} />
                    <main>{children}</main>
                    <Footer brand={brand} year={new Date().getFullYear()} links={links} />
                </MDXProvider>
            </ThemeProvider>
        </>
    );
};

export default Layout;

import React from "react";

import { MDXProvider } from "@mdx-js/react";
import YouTube from "./YouTube";
import CookieConsent from "react-cookie-consent";

import Navigation from "./Navigation";
import Footer from "./Footer";

import Advert from "./Advert";
import Figure from "./Figure";

import "../scss/main.scss";

const Table = ({ children }) => {
    return <table className="table table-striped table-hover table-borderless">{children}</table>;
};

const TableHead = ({ children }) => {
    return <thead className="thead-dark">{children}</thead>;
};

const Layout = ({ children }) => {
    const shortcodes = {
        Advert,
        Figure,
        YouTube,
        table: Table,
        thead: TableHead,
    };

    return (
        <MDXProvider components={shortcodes}>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <CookieConsent
                disableStyles={true}
                containerClasses="fixed-bottom d-flex align-items-center bg-dark"
                contentClasses="d-flex flex-fill align-items-center p-4 text-white"
                buttonClasses="btn btn-primary mx-4"
            >
                This website uses cookies to enhance the user experience. By continuing to browse the site, you are
                agreeing to the use of cookies
            </CookieConsent>
        </MDXProvider>
    );
};

export default Layout;

import React, { Component } from "react";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";

export default class SearchPage extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://cse.google.com/cse.js?cx=009226543321216503349:vgdxxuuvkhu";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <Layout>
                <Meta title="Search" description="search" />
                <PageHeader title="Search" />
                <div className="gcse-search"></div>
            </Layout>
        );
    }
}

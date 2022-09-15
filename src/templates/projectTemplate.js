import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";

export default function ProjectTemplate({ data: { mdx }, children }) {
    const { frontmatter } = mdx;

    return (
        <Layout>
            <Meta title={frontmatter.title} description={frontmatter.description} />
            <PageHeader title={frontmatter.title} />

            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">{children}</div>
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query ($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                slug
                title
                description
            }
        }
    }
`;

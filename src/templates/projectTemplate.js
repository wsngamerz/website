import React from "react"

import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import Meta from "../components/Meta"
import PageHeader from "../components/PageHeader"

export default function ProjectTemplate({ data }) {
    const { mdx } = data
    const { frontmatter, body } = mdx
    return (
        <Layout>
            <Meta title={frontmatter.title} />
            <PageHeader title={frontmatter.title} />

            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

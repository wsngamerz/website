import React from "react"

import { graphql } from "gatsby"
// import RelativeTime from "react-relative-timer"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/Layout"
import Meta from "../components/Meta"
import PageHeader from "../components/PageHeader"

export default function BlogTemplate({ data, location }) {
    const { mdx } = data
    const { frontmatter, body, fields } = mdx

    return (
        <Layout>
            <Meta title={frontmatter.title} description={frontmatter.description} />
            <PageHeader image={frontmatter.thumbnail.childImageSharp.fluid} />

            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">
                        <h2 className="display-3">{frontmatter.title}</h2>
                        <p className="text-muted">
                            <small>
                                {/* Posted <RelativeTime value={frontmatter.date} /> */}
                                Posted {frontmatter.date}
                            </small>
                            <small className="px-1">&middot;</small>
                            <small>by {frontmatter.author}</small>
                            <small className="px-1">&middot;</small>
                            <small>{fields.readingTime.words} Words</small>
                            <small className="px-1">&middot;</small>
                            <small>{fields.readingTime.text}</small>
                        </p>
                    </div>
                    <div className="col-12 col-lg-10 col-xl-8 mb-4" id="post-content">
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                    <div className="col-12">
                        <DiscussionEmbed
                            shortname="wneild-blog"
                            config={{
                                url: location.origin + location.pathname,
                                identifier: frontmatter.slug,
                                title: frontmatter.title,
                            }}
                        />
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
                date
                slug
                title
                description
                author
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            fields {
                readingTime {
                    words
                    text
                }
            }
        }
    }
`

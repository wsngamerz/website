import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Meta from "../components/Meta"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"

const BlogPage = ({ data }) => (
    <Layout>
        <Meta title="Blog" />
        <PageHeader title="Blog" />
        <div className="container my-4">
            <div className="row">
                {data.posts.edges.map(edge => {
                    const post = edge.node.frontmatter
                    return (
                        <div className="col-12 mb-4 py-0 px-3" key={post.slug}>
                            <Card
                                title={post.title}
                                thumbnail={post.thumbnail.childImageSharp.fluid}
                                description={post.description}
                                url={post.slug}
                                post={{
                                    author: post.author,
                                    date: post.date,
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </Layout>
)

export default BlogPage

export const query = graphql`
    query BlogPageQuery {
        posts: allMdx(
            filter: { frontmatter: { slug: { regex: "/blog/" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        description
                        author
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

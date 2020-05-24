import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Meta from "../components/Meta"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"

const ProjectsPage = ({ data }) => (
    <Layout>
        <Meta
            title="Projects"
            description="A collection of my projects which I have worked on. Basically my portfolio"
        />
        <PageHeader title="Projects" />
        <div className="container my-4">
            <div className="row">
                {data.projects.edges.map(edge => {
                    const projects = edge.node.frontmatter
                    return (
                        <div className="col-12 mb-4 py-0 px-3" key={projects.slug}>
                            <Card
                                title={projects.title}
                                thumbnail={projects.thumbnail.childImageSharp.fluid}
                                description={projects.description}
                                url={projects.slug}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </Layout>
)

export default ProjectsPage

export const query = graphql`
    query ProjectPageQuery {
        projects: allMdx(
            filter: { frontmatter: { slug: { regex: "/projects/" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        description
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
        }
    }
`

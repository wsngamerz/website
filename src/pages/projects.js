import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

const ProjectsPage = ({ data }) => (
    <Layout>
        <Meta
            title="Projects"
            description="A collection of my projects which I have worked on. Basically my portfolio"
        />
        <PageHeader title="Projects" />
        <div className="container my-4">
            <div className="row">
                {data.projects.edges
                    .sort((a, b) => a.node.frontmatter.weight - b.node.frontmatter.weight)
                    .map(edge => {
                        const project = edge.node.frontmatter;
                        return (
                            <div className="col-sm-12 col-md-6 mb-4 py-0 px-3" key={project.slug}>
                                <Card
                                    title={project.title}
                                    thumbnail={project.thumbnail.childImageSharp.gatsbyImageData}
                                    description={project.description}
                                    url={project.slug}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    </Layout>
);

export default ProjectsPage;

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
                                gatsbyImageData
                            }
                        }
                        weight
                    }
                }
            }
        }
    }
`;

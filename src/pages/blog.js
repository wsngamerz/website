import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

const BlogPage = ({ data }) => (
    <Layout>
        <Meta
            title="Blog"
            description="A collection of my blog posts which cover a variety of topics including software development and some of my life stories"
        />
        <PageHeader title="Blog" />
        <div className="container my-4">
            <div className="row">
                {data.posts.edges
                    .filter(p => p.node.frontmatter.publish !== false)
                    .map(edge => {
                        const post = edge.node.frontmatter;
                        return (
                            <div className="col-12 mb-4 py-0 px-3" key={post.slug}>
                                <Card
                                    title={post.title}
                                    thumbnail={post.thumbnail.childImageSharp.gatsbyImageData}
                                    description={post.description}
                                    url={post.slug}
                                    post={{
                                        author: post.author,
                                        date: post.date,
                                    }}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    </Layout>
);

export default BlogPage;

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
                                gatsbyImageData
                            }
                        }
                        publish
                    }
                }
            }
        }
    }
`;

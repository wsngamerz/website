import React from "react";

import { Link, graphql } from "gatsby";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import SocialMediaItem from "../components/SocialMediaItem";
import Advert from "../components/Advert";

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Meta title="Home" />
            <PageHeader
                title={data.site.siteMetadata.title}
                subtitle={data.site.siteMetadata.description}
                typewriter={true}
                alternatives={data.site.siteMetadata.alternativeDescriptions}
                big={true}
                buttons={[
                    ["Blog", "/blog"],
                    ["Projects", "/projects"],
                ]}
            />
            <div className="bg-dark text-light">
                <div className="container py-4">
                    <div className="row py-4">
                        <div className="col-12">
                            <h3>Hello and welcome to my website</h3>
                            <p>
                                Here you will be able to view a wonderful selection of my projects and have a read
                                through some of my blog posts where I will talk about a variety of topics including
                                software development, recent technological advancements and also some of my own life
                                stories (because people want to know about that).
                            </p>
                            <p>I hope that you enjoy your time here!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="container pt-4">
                    <div className="row pt-4">
                        <div className="col-12">
                            <h3>Projects</h3>
                            <p>Here is a list of my projects, basically my portfolio.</p>
                            <div className="card-group py-1">
                                {data.latestProjects.edges
                                    .sort((a, b) => a.node.frontmatter.weight - b.node.frontmatter.weight)
                                    .map(edge => {
                                        const project = edge.node.frontmatter;
                                        return (
                                            <Card
                                                key={project.slug}
                                                title={project.title}
                                                thumbnail={project.thumbnail.childImageSharp.gatsbyImageData}
                                                description={project.description}
                                                url={project.slug}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-4">
                            <Advert />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light">
                <div className="container py-4">
                    <div className="row py-4">
                        <div className="col-12">
                            <h3 className="mb-3">Recent Posts</h3>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            {data.latestPosts.edges
                                .filter(p => p.node.frontmatter.publish !== false)
                                .map(edge => {
                                    const post = edge.node.frontmatter;
                                    return (
                                        <div className="col-12 mb-4 p-0" key={post.slug}>
                                            <Card
                                                title={post.title}
                                                thumbnail={post.thumbnail.childImageSharp.gatsbyImageData}
                                                description={edge.node.excerpt}
                                                url={post.slug}
                                                post={{
                                                    author: post.author,
                                                    date: post.date,
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            <div className="col-12 p-0">
                                <Link className="btn btn-secondary btn-block mb-4" to="/blog">
                                    View more
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="list-group">
                                <div className="list-group-item list-group-item-secondary">
                                    <p className="m-0">Social Media</p>
                                </div>
                                <SocialMediaItem
                                    text="Facebook"
                                    icon={FaFacebook}
                                    url="https://www.facebook.com/william.neild.2"
                                />
                                <SocialMediaItem
                                    text="Instagram"
                                    icon={FaInstagram}
                                    url="https://instagram.com/wneild5"
                                />
                                <SocialMediaItem text="Github" icon={FaGithub} url="https://github.com/wsngamerz" />
                                <SocialMediaItem
                                    text="Twitter"
                                    icon={FaTwitter}
                                    url="https://twitter.com/william_neild"
                                />
                                <SocialMediaItem
                                    text="Linkedin"
                                    icon={FaLinkedin}
                                    url="https://linkedin.com/in/wneild5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                description
                alternativeDescriptions
            }
        }
        latestPosts: allMdx(
            filter: { frontmatter: { slug: { regex: "/blog/" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 5
        ) {
            edges {
                node {
                    excerpt(pruneLength: 160)
                    frontmatter {
                        date
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
        latestProjects: allMdx(filter: { frontmatter: { slug: { regex: "/projects/" } } }, limit: 5) {
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

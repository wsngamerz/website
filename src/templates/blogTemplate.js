import React from "react";

import { graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import timeAgo from "../timeAgo";

function BlogTemplate({ data: { mdx }, location, children }) {
    const { frontmatter, fields } = mdx;

    const mins = Math.round(fields.timeToRead.minutes);

    return (
        <Layout>
            <Meta title={frontmatter.title} description={frontmatter.description} />
            <PageHeader image={frontmatter.thumbnail.childImageSharp.gatsbyImageData} />

            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">
                        <h2 className="display-3">{frontmatter.title}</h2>
                        <p className="text-muted">
                            <small>Posted {timeAgo.format(new Date(frontmatter.date))} </small>
                            <small className="px-1">&middot;</small>
                            <small>by {frontmatter.author}</small>
                            <small className="px-1">&middot;</small>
                            <small>{fields.timeToRead.words} Words</small>
                            <small className="px-1">&middot;</small>
                            <small>
                                {mins} {mins === 1 ? "min" : "mins"}
                            </small>
                        </p>
                    </div>
                    <div className="col-12 col-lg-10 col-xl-8 mb-4" id="post-content">
                        {children}
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
    );
}

export const pageQuery = graphql`
    query ($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            fields {
                timeToRead {
                    minutes
                    words
                }
            }
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
            }
        }
    }
`;

export default BlogTemplate;

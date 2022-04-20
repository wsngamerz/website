import React from "react";

import { graphql } from "gatsby";

import Gallery from "@browniebroke/gatsby-image-gallery";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";

const GalleryPage = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp);

    return (
        <Layout>
            <Meta title="Gallery" description="A collection of my photos" />
            <PageHeader title="Gallery" />

            <div className="container my-4">
                <div className="row">
                    <Gallery images={images} />
                </div>
            </div>
        </Layout>
    );
};

export default GalleryPage;

export const query = graphql`
    query GalleryPageQuery {
        allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
            edges {
                node {
                    childImageSharp {
                        thumb: gatsbyImageData(width: 256, height: 256, placeholder: DOMINANT_COLOR)
                        full: gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;

import React from "react";

import { OutboundLink } from "gatsby-plugin-gtag";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Figure = ({ image, caption, attr, attrUrl }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    const figureImage = data.images.edges.find(n => {
        return n.node.relativePath.includes(image);
    });

    if (!figureImage) {
        return null;
    }

    const figureImageData = figureImage.node.childImageSharp.gatsbyImageData;
    // console.log(figureImageData);

    return (
        <figure>
            <GatsbyImage className="figure-img img-fluid rounded" image={figureImageData} alt="" />
            <figcaption className="figure-caption">
                {caption && <p className="m-0 text-left">{caption}</p>}
                {attr && (
                    <p className="m-0 text-left">
                        <OutboundLink href={attrUrl}>{attr}</OutboundLink>
                    </p>
                )}
            </figcaption>
        </figure>
    );
};

export default Figure;

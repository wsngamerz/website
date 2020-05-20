import React from "react"

import { OutboundLink } from "gatsby-plugin-gtag"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Figure = ({ image, caption, attr, attrUrl }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const figureImage = data.images.edges.find(n => {
        return n.node.relativePath.includes(image)
    })

    if (!figureImage) {
        return null
    }

    return (
        <figure>
            <Img className="figure-img img-fluid rounded" fluid={figureImage.node.childImageSharp.fluid} />
            <figcaption className="figure-caption">
                {caption && <p className="m-0 text-left">{caption}</p>}
                {attr && (
                    <p className="m-0 text-left">
                        <OutboundLink href={attrUrl}>{attr}</OutboundLink>
                    </p>
                )}
            </figcaption>
        </figure>
    )
}

export default Figure

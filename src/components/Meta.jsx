import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Meta = ({ title, description, image, post }) => {
    const { pathname } = useLocation()
    const data = useStaticQuery(graphql`
        query Meta {
            site {
                siteMetadata {
                    defaultTitle: title
                    titleTemplate
                    defaultDescription: description
                    siteUrl
                    defaultImage: image
                    socialMedia {
                        twitterUsername
                    }
                }
            }
        }
    `)
    const siteMeta = data.site.siteMetadata

    const seo = {
        title: title || siteMeta.defaultTitle,
        description: description || siteMeta.defaultDescription,
        image: `${siteMeta.siteUrl}${image || siteMeta.defaultImage}`,
        url: `${siteMeta.siteUrl}${pathname}`,
    }

    return (
        <Helmet title={seo.title} titleTemplate={siteMeta.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />

            {post != null ? (
                <>
                    <meta property="og:article:published_time" content={post.published} />
                    <meta property="og:article:modified_time" content={post.modified} />
                    <meta property="og:article:author" content={post.author} />
                    <meta property="og:article:section" content={post.category} />
                    {post.tags.map(tag => (
                        <meta key={tag} property="og:article:tag" content={tag} />
                    ))}
                </>
            ) : (
                <meta property="og:type" content="website" />
            )}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={siteMeta.socialMedia.twitterUsername} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    )
}

export default Meta

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    post: PropTypes.shape({
        published: PropTypes.instanceOf(Date),
        modified: PropTypes.instanceOf(Date),
        author: PropTypes.string,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
    }),
}

Meta.defaultProps = {
    title: null,
    description: null,
    image: null,
    post: null,
}

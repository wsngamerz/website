/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)

    const result = await graphql(`
        {
            allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                            publish
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        if (node.frontmatter.publish !== false) {
            let component = null
    
            if (node.frontmatter.slug.startsWith("/blog/")) {
                component = blogPostTemplate
            } else if (node.frontmatter.slug.startsWith("/projects/")) {
                component = projectTemplate
            }
    
            createPage({
                path: node.frontmatter.slug,
                component: component,
                context: {
                    // additional data can be passed via context
                    slug: node.frontmatter.slug,
                },
            })
        }
    })
}

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions, getConfig }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /canvas/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }

    const config = getConfig()
    if (stage.startsWith("develop") && config.resolve) {
        config.resolve.alias = { ...config.resolve.alias, "react-dom": "@hot-loader/react-dom" }
    }
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const readingTime = require("reading-time");

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        createNodeField({
            node,
            name: `timeToRead`,
            value: readingTime(node.body),
        });
    }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);
    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`);

    const result = await graphql(`
        {
            allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                            publish
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        if (node.frontmatter.publish !== false && node.frontmatter.slug !== null) {
            let templateComponent = null;

            console.log(JSON.stringify(node.frontmatter));

            if (node.frontmatter.slug.startsWith("/blog/")) {
                templateComponent = blogPostTemplate;
            } else if (node.frontmatter.slug.startsWith("/projects/")) {
                templateComponent = projectTemplate;
            }

            createPage({
                path: node.frontmatter.slug,
                component: `${templateComponent}?__contentFilePath=${node.internal.contentFilePath}`,
                context: {
                    // additional data can be passed via context
                    slug: node.frontmatter.slug,
                },
            });
        }
    });
};

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
        });
    }
};

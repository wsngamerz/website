module.exports = {
    siteMetadata: {
        title: `William Neild`,
        siteUrl: `https://williamneild.com`
    },
    plugins: [
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: ["UA-75997847-9"],
                gtagConfig: {
                    anonymize_ip: true
                }
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "content/images/icon.png"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/content/images/`
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: "gatsby-source-filesystem/",
            options: {
                name: "posts",
                path: `${__dirname}/content/posts/`
            }
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/content/posts/`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: `${__dirname}/content/projects/`
            }
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/content/projects/`
            }
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                // defaultLayouts: {
                //     default: require.resolve("./src/components/layout.js"),
                //     posts: require.resolve("./src/components/posts-layout.js"),
                //     projects: require.resolve("./src/components/projects-layout.js")
                // }
            }
        }
    ]
};

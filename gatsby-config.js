module.exports = {
    siteMetadata: {
        title: "William Neild",
        titleTemplate: "%s · William Neild",
        description: "An aspiring student who loves software development",
        alternativeDescriptions: [
            "A student who adores technology",
            "A future blogging star (or so he thinks)",
            "A passionate nerd",
        ],
        author: "William Neild",
        siteUrl: "https://williamneild.com",
        image: "",
        socialMedia: {
            twitterUrl: "https://twitter.com/wsngamerz",
            twitterUsername: "wsngamerz",
            facebookUrl: "https://www.facebook.com/profile.php?id=100009434476455",
            githubUrl: "https://github.com/wsngamerz",
            instagramUrl: "https://www.instagram.com/wneild5",
            linkedinUrl: "https://www.linkedin.com/in/wneild5",
        },
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-remark-reading-time",
        {
            resolve: "gatsby-transformer-sharp",
            options: {
                checkSupportedExtensions: false,
            },
        },
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                stripMetadata: true,
                defaultQuality: 90,
                useMozJpeg: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: "gatsby-plugin-sentry",
            options: {
                dsn: "https://a8e3a683c5f84b9cbd1928e1145c1dc5@o294554.ingest.sentry.io/5249583",
                environment: process.env.NODE_ENV,
                enabled: (() => ["production", "stage", "development"].indexOf(process.env.NODE_ENV) !== -1)(),
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    posts: require.resolve("./src/templates/blogTemplate.js"),
                    projects: require.resolve("./src/templates/projectTemplate.js"),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-advanced-sitemap",
            options: {
                createLinkInHead: true,
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "William Neild",
                short_name: "William Neild",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "content/images/wn-icon.png",
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: "UA-75997847-9",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // "gatsby-plugin-offline",
    ],
}

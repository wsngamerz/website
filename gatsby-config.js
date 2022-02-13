module.exports = {
    siteMetadata: {
        title: "William Neild",
        subtitle: "An aspiring software developer",
        altSubtitles: [
            "A technology enthusiast",
            "A wannabe blogger",
            "An undergraduate computer science student",
            "A wabba dubba dubdub developer" // A GitHub Co-pilot suggestion
        ],
        siteUrl: `https://williamneild.com`,
        description: "William Neild is an undergraduate computer science student based in Leeds.",
        links: [
            {
                label: "Home",
                url: "/"
            },
            {
                label: "Blog",
                url: "/blog"
            },
            {
                label: "Projects",
                url: "/projects"
            },
            {
                label: "About",
                url: "/about"
            },
            {
                label: "Contact",
                url: "/contact"
            },
            {
                label: "Privacy Policy",
                url: "/privacy-policy",
                navbarHidden: true
            },
            {
                label: "Terms",
                url: "/terms",
                navbarHidden: true
            }
        ]
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
    ],
    jsxRuntime: "automatic"
};

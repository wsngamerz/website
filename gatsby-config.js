const wrapESMPlugin = name =>
    function wrapESM(opts) {
        return async (...args) => {
            const mod = await import(name);
            const plugin = mod.default(opts);
            return plugin(...args);
        };
    };

module.exports = {
    siteMetadata: {
        title: "William Neild",
        titleTemplate: "%s · William Neild",
        description: "An aspiring software developer",
        alternativeDescriptions: [
            "A technology enthusiast",
            "A wannabe blogger",
            "An undergraduate computer science student",
            "A wabba dubba dubdub developer", // A GitHub Co-pilot suggestion
        ],
        author: "William Neild",
        siteUrl: "https://williamneild.com",
        image: "",
        socialMedia: {
            facebookUrl: "https://www.facebook.com/william.neild.2",
            githubUrl: "https://github.com/wsngamerz",
            instagramUrl: "https://www.instagram.com/wneild5",
            linkedinUrl: "https://www.linkedin.com/in/wneild5",
        },
    },
    plugins: [
        "gatsby-plugin-offline",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
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
        {
            resolve: "gatsby-plugin-sitemap",
            options: {},
        },
    ],
};

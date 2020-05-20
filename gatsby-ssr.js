/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// replace inline css/scss with links
exports.onPreRenderHTML = ({ getHeadComponents }) => {
    if (process.env.NODE_ENV !== "production") return

    let hc = getHeadComponents()
    hc.forEach(el => {
        if (el.type === "style") {
            el.type = "link"
            el.props["href"] = el.props["data-href"]
            el.props["rel"] = "stylesheet"
            el.props["type"] = "text/css"

            delete el.props["data-href"]
            delete el.props["dangerouslySetInnerHTML"]
        }
    })
}

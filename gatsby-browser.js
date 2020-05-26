/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"

import LogRocket from "logrocket"

export const onClientEntry = () => {
    console.log("We've started!")
    LogRocket.init("8zhkwi/williamneildcom")
}

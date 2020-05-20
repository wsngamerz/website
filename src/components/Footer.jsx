import React from "react"

import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="footer text-muted bg-dark py-2">
            <div className="container-fluid">
                <div className="row py-4">
                    <div className="col-12 col-md-10">
                        <p className="text-light m-0 mb-2">© William Neild 2020</p>
                        <p className="m-0">
                            <Link className="text-light mr-2" to="/">
                                Home
                            </Link>
                            <Link className="text-light mr-2" to="/blog/">
                                Blog
                            </Link>
                            <Link className="text-light mr-2" to="/projects/">
                                Projects
                            </Link>
                            <Link className="text-light mr-2" to="/about/">
                                About
                            </Link>
                            <Link className="text-light" to="/contact/">
                                Contact
                            </Link>
                        </p>
                        <p>
                            <Link className="text-light mr-2" to="/privacy-policy/">
                                Privacy Policy
                            </Link>
                            <Link className="text-light mr-2" to="/terms/">
                                Terms
                            </Link>
                        </p>
                    </div>
                    <div className="col-12 col-md-2 d-flex align-items-center">
                        <button
                            className="btn btn-link shadow-none p-0"
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                        >
                            Back to top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

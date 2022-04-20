import React from "react";

import { Link } from "gatsby";

const Navigation = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: 500 }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    William Neild
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto">
                        <Link className="nav-item nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-item nav-link" to="/blog/">
                            Blog
                        </Link>
                        <Link className="nav-item nav-link" to="/projects/">
                            Projects
                        </Link>
                        <Link className="nav-item nav-link" to="/gallery/">
                            Gallery
                        </Link>
                        <Link className="nav-item nav-link" to="/about/">
                            About
                        </Link>
                        <Link className="nav-item nav-link" to="/contact/">
                            Contact
                        </Link>
                    </div>
                    <form className="form-inline my-2 my-lg-0" action="/search" method="GET">
                        <div className="input-group">
                            <input
                                className="form-control"
                                name="q"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

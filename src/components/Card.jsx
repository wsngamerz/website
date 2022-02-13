import React from "react";

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import timeAgo from "../timeAgo";

const Card = ({ title, thumbnail, description, url, post }) => {
    return (
        <div className="card">
            {post == null && <h5 className="card-header">{title}</h5>}
            <GatsbyImage className="card-img-top rounded" image={thumbnail} alt="" />
            <div className="card-body">
                {post != null && <h5 className="card-title">{title}</h5>}
                <p className="card-text">{description}</p>
                {post != null && (
                    <Link className="stretched-link" to={url}>
                        Continue Reading
                    </Link>
                )}
            </div>
            <div className="card-footer">
                {post != null ? (
                    <p className="card-text text-muted">
                        <small>by {post.author}</small>
                        <span> - </span>
                        <small>Posted {timeAgo.format(new Date(post.date))}</small>
                    </p>
                ) : (
                    <Link className="stretched-link" to={url}>
                        Visit project page
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Card;

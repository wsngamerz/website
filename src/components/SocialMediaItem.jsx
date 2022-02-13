import React from "react";

import { OutboundLink } from "gatsby-plugin-gtag";

const SocialMediaItem = ({ text, icon, url }) => {
    const Icon = icon;
    return (
        <OutboundLink
            className="list-group-item list-group-item-action d-flex align-items-center"
            href={url}
            target="_blank"
        >
            <Icon fontSize="32px" />
            <span className="ps-3">{text}</span>
        </OutboundLink>
    );
};

export default SocialMediaItem;

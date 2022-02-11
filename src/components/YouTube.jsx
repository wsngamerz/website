import React from "react";

import YouTubeEmbed from "react-youtube";

const YouTube = ({ videoId }) => {
    return <YouTubeEmbed containerClassName="my-2 youtube-container" className="rounded" videoId={videoId} />;
};

export default YouTube;

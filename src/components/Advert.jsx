import React from "react"

import AdSense from "react-adsense"

const Advert = () => {
    return (
        <div className="card my-4">
            <div className="card-header">Advert</div>
            <div className="card-body">
                <AdSense.Google client="ca-pub-1817516990902330" slot="4006321015" format="auto" responsive="true" />
            </div>
        </div>
    )
}

export default Advert

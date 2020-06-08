import React from "react"

import AdSense from "react-adsense"

const enabled = false

const Advert = () => {
    return enabled ? (
        <div className="card">
            <div className="card-header">Advert</div>
            <div className="card-body">
                <AdSense.Google client="ca-pub-1817516990902330" slot="4006321015" format="auto" responsive="true" />
            </div>
        </div>
    ) : null
}

export default Advert

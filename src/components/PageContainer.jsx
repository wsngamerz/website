import React from "react";

const Advert = ({ children }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-4">{children}</div>
            </div>
        </div>
    );
};

export default Advert;

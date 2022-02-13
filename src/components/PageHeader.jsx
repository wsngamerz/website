import React, { Component } from "react";

import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import Trianglify from "trianglify/dist/trianglify.bundle.js";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "../scss/_pageHeader.scss";

class PageHeader extends Component {
    constructor(props) {
        super(props);

        if (props.image == null) {
            this.background = this.generateBackground();
        }
    }

    generateBackground() {
        const width = 1280;
        const height = 720;

        const colorPalette = [
            ["#81D4FA", "#0D47A1"],
            ["#CE93D8", "#311B92"],
            ["#ef9a9a", "#880E4F"],
            ["#F48FB1", "#b71c1c"],
            ["#C5E1A5", "#1B5E20"],
            ["#80CBC4", "#004D40"],
            ["#9FA8DA", "#1A237E"],
            ["#FFAB91", "#BF360C"],
            ["#CE9FFC", "#7367F0"],
            ["#F97794", "#623AA2"],
            ["#43CBFF", "#9708CC"],
            ["#F761A1", "#8C1BAB"],
            ["#52E5E7", "#130CB7"],
            ["#79F1A4", "#0E5CAD"],
            ["#97ABFF", "#123597"],
            ["#FD6E6A", "#FFC600"],
            ["#3B2667", "#BC78EC"],
            ["#3C8CE7", "#00EAFF"],
        ];

        const patternSVGTree = Trianglify({
            width: width,
            height: height,
            xColors: colorPalette[~~(Math.random() * colorPalette.length)],
        }).toSVGTree({
            includeNamespace: true,
            coordinateDecimals: 1,
        });

        // replace default attributes so we can make this responsive
        delete patternSVGTree.attrs["height"];
        delete patternSVGTree.attrs["width"];
        patternSVGTree.attrs["viewBox"] = `0 0 ${width} ${height}`;
        patternSVGTree.attrs["preserveAspectRatio"] = "xMidYMid slice";

        return { __html: patternSVGTree };
    }

    render() {
        const { title, subtitle, typewriter, alternatives, big, buttons, image } = this.props;

        return (
            <header className={"pageheader" + (big ? " pageheader-big" : "")}>
                {image ? (
                    <div className="pageheader-background">
                        <GatsbyImage className="pageheader-image" image={image} alt="" />
                    </div>
                ) : (
                    <div className="pageheader-background" dangerouslySetInnerHTML={this.background}></div>
                )}

                {title != null && (
                    <div className="pageheader-body d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-xl-10 col-lg-8 p-4 m-2">
                                    <h1 className="display-2">{title}</h1>
                                    {subtitle != null ? (
                                        <h2 className="pageheader-subtitle mb-4">
                                            {typewriter ? (
                                                <Typewriter
                                                    options={{
                                                        strings: [subtitle, ...alternatives],
                                                        autoStart: true,
                                                        loop: true,
                                                        delay: 50,
                                                        deleteSpeed: 30,
                                                    }}
                                                />
                                            ) : (
                                                subtitle
                                            )}
                                        </h2>
                                    ) : (
                                        ""
                                    )}
                                    <div>
                                        {buttons.map(button => (
                                            <Link key={button[0]} to={button[1]} className="btn btn-primary me-2">
                                                {button[0]}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        );
    }
}

export default PageHeader;

PageHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    typewriter: PropTypes.bool,
    alternatives: PropTypes.arrayOf(PropTypes.string),
    big: PropTypes.bool,
    buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

PageHeader.defaultProps = {
    title: null,
    subtitle: null,
    typewriter: false,
    alternatives: [],
    big: false,
    buttons: [],
    image: null,
};

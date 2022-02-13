import styled from "styled-components";
import PropTypes from "prop-types";
import Trianglify from "trianglify/dist/trianglify.bundle.js";
import Typewriter from "typewriter-effect";
import { GatsbyImage } from "gatsby-plugin-image";

const Header = styled.header`
    display: block;
    width: 100%;
    height: ${props => (props.big ? "100vh" : "50vh")};
    overflow: hidden;
    position: relative;

    background-color: #333;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;

    svg {
        min-width: 100%;
        min-height: 100%;
    }
`;

const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => (props.big ? "100vh" : "50vh")};
    color: ${props => props.theme.colors.text.white};
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;

    h1,
    h2 {
        margin: 0 0 0.5rem 0;
    }

    h1 {
        font-size: 5.5rem;
        font-weight: 300;

        @media (max-width: 1200px) {
            font-size: calc(1.675rem + 5.1vw);
        }
    }

    h2 {
        font-size: 2rem;
        font-weight: 100;

        @media (max-width: 1200px) {
            font-size: calc(1.325rem + 0.9vw);
        }
    }
`;

const PageHeader = ({ big, image, title, subtitle, typewriter, altSubtitles }) => {
    const generateBackground = () => {
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
            ["#3C8CE7", "#00EAFF"]
        ];

        const patternSVGTree = Trianglify({
            width: width,
            height: height,
            xColors: colorPalette[~~(Math.random() * colorPalette.length)]
        }).toSVGTree({
            includeNamespace: true,
            coordinateDecimals: 1
        });

        // replace default attributes so we can make this responsive
        delete patternSVGTree.attrs["height"];
        delete patternSVGTree.attrs["width"];
        patternSVGTree.attrs["viewBox"] = `0 0 ${width} ${height}`;
        patternSVGTree.attrs["preserveAspectRatio"] = "xMidYMid slice";

        return { __html: patternSVGTree };
    };

    return (
        <Header big={big}>
            <BackgroundImage dangerouslySetInnerHTML={!image ? generateBackground() : undefined}>
                {image && (
                    <GatsbyImage
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        image={image}
                        alt=""
                    />
                )}
            </BackgroundImage>
            <HeaderBody big={big}>
                <HeaderContent>
                    <h1>{title}</h1>
                    <h2>
                        {typewriter ? (
                            <Typewriter
                                options={{
                                    strings: [subtitle, ...altSubtitles],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 20
                                }}
                            />
                        ) : (
                            subtitle
                        )}
                    </h2>
                </HeaderContent>
            </HeaderBody>
        </Header>
    );
};

PageHeader.defaultProps = {
    big: false,
    image: null,
    title: "",
    subtitle: "",
    typewriter: false,
    altSubtitles: []
};

PageHeader.propTypes = {
    /** Whether the header is big or not */
    big: PropTypes.bool,
    /** The image to use as a background.
     * This needs to be the response from a gatsbyImageData query.
     * If this prop is not set, then a triangle background will automatically be generated instead. */
    image: PropTypes.object,
    /** The title of the header */
    title: PropTypes.string,
    /** The subtitle of the header */
    subtitle: PropTypes.string,
    /** Whether to use the typewriter effect or not */
    typewriter: PropTypes.bool,
    /** An array of subtitles to use if the typewriter effect is enabled */
    altSubtitles: PropTypes.array
};

export default PageHeader;

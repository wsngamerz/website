import styled from "styled-components";
import Trianglify from "trianglify";
import { GatsbyImage } from "gatsby-plugin-image";

const Header = styled.header`
    display: block;
    width: 100%;
    height: ${props => (props.big ? "100vh" : "50vh")};
    overflow: hidden;

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

const PageHeader = ({ big, image }) => {
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
                {image && <GatsbyImage image={image} alt="" />}
            </BackgroundImage>
        </Header>
    );
};
export default PageHeader;

import PageHeader from "./PageHeader";

import testImagePng from "../../../content/images/test/test.png";
import testImageWebp from "../../../content/images/test/test.webp";

export default {
    title: "Components/PageHeader",
    component: PageHeader
};

const Template = args => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "William Neild",
    subtitle: "An aspiring software developer",
    image: undefined,
    big: true,
    typewriter: true,
    altSubtitles: [
        "A technology enthusiast",
        "A wannabe blogger",
        "An undergraduate computer science student",
        "A wabba dubba dubdub developer" // A GitHub Co-pilot suggestion
    ]
};

const gatsbyImageData = {
    layout: "constrained",
    backgroundColor: "#080808",
    images: {
        fallback: {
            src: testImagePng,
            srcSet: `${testImagePng} 300w,\n${testImagePng} 600w,\n${testImagePng} 1200w`,
            sizes: "(min-width: 1200px) 1200px, 100vw"
        },
        sources: [
            {
                srcSet: `${testImageWebp} 300w,\n${testImageWebp} 600w,\n${testImageWebp} 1200w`,
                type: "image/webp",
                sizes: "(min-width: 1200px) 1200px, 100vw"
            }
        ]
    },
    width: 1200,
    height: 400
};

export const WithImage = Template.bind({});
WithImage.args = {
    title: undefined,
    subtitle: undefined,
    image: gatsbyImageData,
    big: false,
    typewriter: false,
    altSubtitles: undefined
};

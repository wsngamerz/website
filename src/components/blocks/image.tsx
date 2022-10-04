import alinea from "alinea";

import type { LinkData } from "@alinea/input.link";

export const ImageSchema = alinea.type("Image", {
    image: alinea.image("Image"),
    alt: alinea.text("Alt"),
    figure: alinea.text("Figure Text"),
});

type Props = {
    image: LinkData.Image;
    alt?: string;
    figure?: string;
};

// TODO: Add figure

const Image = ({ image, alt, figure }: Props) => {
    return <img src={`/assets/${image.src}`} alt={alt} />;
};

export default Image;

import alinea from "alinea";

import type { LinkData } from "@alinea/input.link";

export const ButtonSchema = alinea.type("Button", {
    link: alinea.link("Link"),
});

type Props = {
    link: LinkData.Url;
};

const Button = ({ link }: Props) => {
    return (
        <div className="flex justify-center w-full">
            <a href={link?.url}>
                <button className="py-2 px-4 bg-cyan-500 mr-2 rounded text-white">
                    {link?.description}
                </button>
            </a>
        </div>
    );
};

export default Button;

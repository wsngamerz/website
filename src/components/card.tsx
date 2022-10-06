import Link from "next/link";
import { RichText } from "@alinea/ui";
import { Fragment } from "react";

import type { TextDoc } from "alinea";
import type { LinkData } from "@alinea/input.link";

type Props = {
    name: string;
    excerpt: TextDoc;
    cover?: LinkData.Image;
    to?: string;
};

const LinkWrapper = ({ children, to }) => {
    return (
        <Link href={to}>
            <a>{children}</a>
        </Link>
    );
};

const Card = ({ name, excerpt, cover, to }: Props) => {
    const Wrapper = to !== undefined ? LinkWrapper : Fragment;

    return (
        <Wrapper to={to}>
            <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 h-full">
                <img
                    alt={`Project cover art for ${name}`}
                    src={
                        cover
                            ? `/assets/${cover.src}`
                            : "https://via.placeholder.com/1200x400"
                    }
                    className="rounded-md object-cover"
                />

                <div className="mt-2">
                    <span className="font-medium">{name}</span>
                    <RichText
                        doc={excerpt}
                        p={<p className="mt-2 text-sm text-gray-500"></p>}
                    />
                </div>
            </div>
        </Wrapper>
    );
};

export default Card;

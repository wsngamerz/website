import Link from "next/link";

import DateFormatter from "./date-formatter";
import RichTextStyled from "./rich-text";

import type { ImageReference } from "@alinea/picker.entry";
import type { TextDoc } from "alinea";

type Props = {
    name: string;
    excerpt: TextDoc;
    cover?: ImageReference;
    to?: string;
    date?: Date;
    words?: number;
    mins?: number;
};

const LinkButton = ({ children, to }) => {
    return (
        <Link href={to}>
            <a>{children}</a>
        </Link>
    );
};

const EmptyDiv = ({ children, to }) => {
    return <div>{children}</div>;
};

const Card = ({ name, excerpt, cover, to, date, words, mins }: Props) => {
    const Wrapper = to !== undefined ? LinkButton : EmptyDiv;

    return (
        <Wrapper to={to}>
            <div className="block rounded-lg p-4 shadow-md shadow-gray-300 h-full bg-white">
                <img
                    alt={`Project cover art for ${name}`}
                    src={
                        cover
                            ? `/assets/${cover.src}`
                            : "https://via.placeholder.com/1200x400"
                    }
                    className="rounded-md object-cover shadow-sm shadow-gray-200"
                />

                <div className="mt-2">
                    <span className="font-medium">{name}</span>
                    <RichTextStyled content={excerpt} />
                    {(date || words || mins) && (
                        <div className="flex gap-2 text-sm text-gray-600">
                            <DateFormatter date={date} />
                            <p>&#x2022;</p>
                            <p>{words} words</p>
                            <p>&#x2022;</p>
                            <p>
                                {mins} min{mins != 1 && "s"}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Card;

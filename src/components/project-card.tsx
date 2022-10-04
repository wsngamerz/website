import { RichText } from "@alinea/ui";

import type { TextDoc } from "alinea";
import type { LinkData } from "@alinea/input.link";

type Props = {
    name: string;
    excerpt: TextDoc;
    cover?: LinkData.Image;
};

const ProjectCard = ({ name, excerpt, cover }: Props) => {
    return (
        <div className="flex-1 block rounded-lg p-4 m-4 shadow-sm shadow-indigo-100">
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
    );
};

export default ProjectCard;

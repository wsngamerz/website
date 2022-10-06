import { RichText } from "@alinea/ui";

import Alert from "./blocks/alert";
import Button from "./blocks/button";
import Image from "./blocks/image";

import type { TextDoc } from "alinea";

type Props = {
    content: TextDoc;
};

const RichTextStyled = ({ content }: Props) => {
    return (
        <RichText
            doc={content}
            p={<p className="py-2"></p>}
            a={<a className="text-cyan-500 underline" />}
            h1={<h1 className="mt-4 font-bold text-3xl" />}
            h2={<h2 className="mt-4 font-bold text-2xl" />}
            h3={<h3 className="mt-4 font-bold text-xl" />}
            ul={<ul className="list-disc list-inside" />}
            // the following weirdness ↓↓ fixes an issue with paragraphs inside list items being on a newline
            li={<li className="[&_p]:inline-block" />}
            Image={Image}
            Alert={Alert}
            Button={Button}
        />
    );
};

export default RichTextStyled;

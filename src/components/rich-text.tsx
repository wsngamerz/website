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
            Image={Image}
            Alert={Alert}
            Button={Button}
        />
    );
};

export default RichTextStyled;

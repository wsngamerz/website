import alinea from "alinea";

import type { LinkData } from "@alinea/input.link";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const ButtonSchema = alinea.type("Button", {
    link: alinea.link("Link"),
});

type Props = {
    link: LinkData.Url;
};

const Button = ({ link }: Props) => {
    return (
        <div className="flex justify-center w-full">
            <Link href={link?.url} className={buttonVariants()}>
                {link?.description}
            </Link>
        </div>
    );
};

export default Button;

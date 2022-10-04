import Link from "next/link";
import { Fragment } from "react";

import cx from "classnames";

type Props = {
    children: any;
    to?: string;
    wide?: boolean;
};

const LinkButton = ({ children, to }) => {
    return (
        <Link href={to}>
            <a>{children}</a>
        </Link>
    );
};

const Button = ({ children, to, wide }: Props) => {
    const Wrapper = to !== undefined ? LinkButton : Fragment;

    return (
        <Wrapper to={to}>
            <button
                className={cx(
                    "py-2 px-4 bg-cyan-500 mr-2 rounded text-white",
                    wide && "px-16"
                )}
            >
                {children}
            </button>
        </Wrapper>
    );
};

export default Button;

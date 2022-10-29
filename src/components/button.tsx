import Link from "next/link";

import cx from "classnames";

type Props = {
    children: any;
    to?: string;
    wide?: boolean;
};

const LinkButton = ({ children, to }) => {
    return <Link href={to}>{children}</Link>;
};

const EmptyDiv = ({ children }) => {
    return <div>{children}</div>;
};

const Button = ({ children, to, wide }: Props) => {
    const Wrapper = to !== undefined ? LinkButton : EmptyDiv;

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

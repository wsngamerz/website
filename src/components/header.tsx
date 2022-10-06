import cx from "classnames";
import Typewriter from "typewriter-effect";

import Button from "./button";

type Props = {
    title?: string;
    subtitle?: string;
    typewriter?: boolean;
    alternatives?: string[];
    big?: boolean;
    buttons?: [string, string][];
};

const Header = ({
    title,
    subtitle,
    typewriter,
    alternatives,
    big,
    buttons,
}: Props) => {
    return (
        <header
            className={cx(
                "flex justify-center items-center bg-gray-100",
                big ? "h-screen" : "h-[40vh]"
            )}
        >
            <div className="w-11/12 md:w-10/12 lg:w-9/12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl">{title}</h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-lighter">
                    {typewriter ? (
                        <Typewriter
                            options={{
                                strings: [subtitle, ...alternatives],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    ) : (
                        subtitle
                    )}
                </h2>
                {buttons && (
                    <div className="py-8">
                        {buttons.map((button) => (
                            <Button key={button[0]} to={button[1]}>
                                {button[0]}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

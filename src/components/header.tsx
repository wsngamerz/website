import Link from "next/link";
import Typewriter from "typewriter-effect";
import cn from "classnames";

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
            className={cn(
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
                            <Link href={button[1]} key={button[0]}>
                                <a>
                                    <Button>{button[0]}</Button>
                                </a>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

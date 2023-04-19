import { cn } from "../lib/utils";
import Typewriter from "typewriter-effect";

import { buttonVariants } from "./ui/button";
import Link from "next/link";

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
                big ? "h-[75vh]" : "h-[30vh] min-h-[14rem]"
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
                            <Link
                                key={button[0]}
                                href={button[1]}
                                className={cn(buttonVariants(), "mr-2")}
                            >
                                {button[0]}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

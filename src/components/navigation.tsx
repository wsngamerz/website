import Link from "next/link";

import Brand from "./brand";

const Navigation = () => {
    const urls = [
        { path: "/about", name: "About" },
        { path: "/blog", name: "Blog" },
        { path: "/projects", name: "Projects" },
        { path: "/gallery", name: "Gallery" },
        { path: "/contact", name: "Contact" },
    ];

    // Modified from: https://www.hyperui.dev/components/marketing/navigations

    return (
        <nav className="shadow-sm shadow-gray-200">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    {/* Brand name */}
                    <Link href="/">
                        <Brand />
                    </Link>

                    {/* Search form */}
                    <form className="mb-0 hidden lg:flex" action="/search">
                        <div className="relative">
                            <input
                                className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                                placeholder="Search..."
                                type="text"
                                name="q"
                            />

                            <button
                                className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                                type="submit"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Search icon to be displayed on smaller displays */}
                <div className="flex w-0 flex-1 justify-end lg:hidden">
                    <Link href="/search">
                        <button
                            className="rounded-full bg-gray-100 p-2 text-gray-500"
                            type="button"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                </div>

                {/* Large display links */}
                <div className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
                    {urls.map((url) => (
                        <Link
                            key={url.name}
                            href={url.path}
                            className="text-gray-900"
                        >
                            {url.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Smaller display links */}
            <div className="border-t border-gray-100 lg:hidden">
                <div className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
                    {urls.map((url) => (
                        <Link
                            key={url.name}
                            href={url.path}
                            className="flex-shrink-0 pl-4 text-gray-900"
                        >
                            {url.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

import Link from "next/link";

import Brand from "./brand";

const Footer = () => {
    const urls = [
        { path: "/about", name: "About" },
        { path: "/blog", name: "Blog" },
        { path: "/projects", name: "Projects" },
        { path: "/gallery", name: "Gallery" },
        { path: "/contact", name: "Contact" },
        { path: "/privacy-policy", name: "Privacy Policy" },
        { path: "/terms", name: "Terms" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-100 shadow-inner shadow-gray-200">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                {/* Scroll to top button */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
                    <button
                        className="inline-block rounded-full bg-cyan-500 p-2 text-white shadow transition hover:bg-cyan-600 sm:p-3 lg:p-4"
                        onClick={scrollToTop}
                    >
                        <span className="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <Link href="/">
                        <a>
                            <Brand />
                        </a>
                    </Link>

                    <nav
                        className="mt-12 lg:mt-0"
                        aria-labelledby="footer-navigation"
                    >
                        <h2 className="sr-only" id="footer-navigation">
                            Footer navigation
                        </h2>

                        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-8">
                            {urls.map((url) => (
                                <li key={url.name}>
                                    <Link href={url.path}>
                                        <a className="text-gray-700 transition hover:text-gray-700/75">
                                            {url.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; William Neild 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react"
import { NavLink } from "react-router-dom"
import { Logo } from "./Logo"


const NavigationLink = ({ children, to }) => {
    const activeStyle = "bg-gray-900"
    const style = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-sm text-sm font-medium font-mono"

    return (
        <NavLink className={style} activeClassName={activeStyle} to={to} end>{children}</NavLink>
    )
}

const NavigationLinkMobile = ({ children, to }) => {
    const activeStyle = "bg-gray-900"
    const style = "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-sm text-base font-medium font-mono"

    return (
        <NavLink className={style} activeClassName={activeStyle} to={to} end>{children}</NavLink>
    )
}

export const Navigation = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button */}
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            {/* Menu Icon [When closed] */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            {/* Menu Icon [When open] */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        {/* The `brand` image and navbar text */}
                        <div className="flex-shrink-0 flex items-center">
                            <Logo className="block h-8 w-auto mb-1.5" />
                            <span className="hidden md:block px-3 py-2 text-lg font-extrabold font-mono text-gray-100 w-auto">William Neild</span>
                        </div>

                        <div className="hidden md:block flex-1 md:ml-6 m-auto">
                            <div className="flex space-x-4 justify-end">
                                <NavigationLink to="/">Home</NavigationLink>
                                <NavigationLink to="/about">About</NavigationLink>
                                <NavigationLink to="/projects">Projects</NavigationLink>
                                <NavigationLink to="/contact">Contact</NavigationLink>
                                <NavigationLink to="/blog">Blog</NavigationLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavigationLinkMobile to="/">Home</NavigationLinkMobile>
                    <NavigationLinkMobile to="/about">About</NavigationLinkMobile>
                    <NavigationLinkMobile to="/projects">Projects</NavigationLinkMobile>
                    <NavigationLinkMobile to="/contact">Contact</NavigationLinkMobile>
                    <NavigationLinkMobile to="/blog">Blog</NavigationLinkMobile>
                </div>
            </div>
        </nav>
    )
}

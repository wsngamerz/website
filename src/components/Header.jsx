import React from "react"
import { Link } from "react-router-dom"


export const Header = ({ title, children, link="", linkText="", large=false }) => {
    return (
        <div className="bg-gray-700">
            <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col justify-center " + (large ? "h-75vh" : "py-24")}>
                <h1 className="text-4xl font-mono font-bold italic text-gray-100">{title}</h1>
                
                <div className="max-w-none md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
                    <p className="text-lg text-gray-100 font-mono font-lighter my-4">
                        {children}
                    </p>

                    {link !== "" &&
                        <Link to={link} className="text-gray-300 bg-gray-800 hover:bg-gray-600 hover:text-white px-6 py-3 rounded-sm text-base font-medium font-mono">{linkText}</Link>
                    }
                </div>
            </div>
        </div>
    )
}

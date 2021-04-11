import React from "react"
import { Link } from "react-router-dom"


const Project = ({ name, description, utilises, image, url, flipped = false }) => {
    return (
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-8 mb-16 last:mb-8">
            <div className={"md:col-span-2 aspect-w-16 aspect-h-9 bg-gray-700 rounded-sm" + (flipped ? " md:col-start-2 md:row-start-1":"")}>
                <img src={image} alt={"Image of " + name} />
            </div>
            <div className={"flex flex-col justify-center md:col-span-1" + (flipped ? " md:col-start-1 md:row-start-1":"")}>
                <h4 className="text-sm text-gray-300 italic font-mono font-extrabold">Featured Project</h4>
                <h3 className="text-xl text-gray-100 font-mono font-semibold">{name}</h3>
                <p className="text-base text-gray-100 font-mono font-light my-2">{description}</p>
                <p className="text-sm text-gray-300 font-mono font-light italic">{utilises}</p>
                <Link to={url} className="self-center text-gray-300 bg-gray-800 hover:bg-gray-600 hover:text-white px-6 py-3 mt-4 rounded-sm text-base font-medium font-mono">Find Out More</Link>
            </div>
        </div>
    )
}

export const ProjectsPanel = () => {
    return (
        <div className="bg-gray-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
                <h2 className="text-xl text-gray-100 font-mono font-medium mb-2">My Projects</h2>

                <Project name="Wyvern Media Server"
                    description="Wyvern media server is a small self-hosted and fully customisable media server capable of serving your content to all your devices."
                    utilises="node.js, React, Express, mongodb"
                    image=""
                    url="/projects/wyvern-media-server" />
                
                <Project name="TapZ"
                    description="TapZ is a zombie apocalypse themed incremental game which features endless waves of zombies and you must fight them off with what you can get your hands on!"
                    utilises="html5, css3, javascript (es6+)"
                    image=""
                    url="/projects/tapz" flipped/>
            </div>
        </div>
    )
}

import React from "react"


const SkillsCategory = ({items=[], special=[]}) => {
    return (
        <div className="flex flex-col flex-1 bg-gray-700 py-2 px-4 rounded-sm mb-4 sm:mb-0 sm:mr-4 last:mr-0">
            {items.map((item, index) => <span key={index} className="text-base text-gray-200 font-mono py-1">{item}</span>)}
            {special.map((item, index) => <span key={index} className="text-sm text-gray-300 font-mono font-light italic py-1">{item}</span>)}
        </div>
    )
}

export const SkillsPanel = () => {
    return (
        <div className="bg-gray-600">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
                <h2 className="text-xl text-gray-100 font-mono font-medium mb-2">My Skills</h2>
                <div className="block sm:flex">
                    <SkillsCategory items={["HTML", "CSS", "JavaScript"]} />
                    <SkillsCategory items={["node.js", "npm", "React", "Express"]}/>
                    <SkillsCategory items={["C#", ".NET"]}/>
                    <SkillsCategory items={["Linux", "Python3"]} special={["I also know how to make a powerpoint with graphs and cool transitions!"]}/>
                </div>
            </div>
        </div>
    )
}

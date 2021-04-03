import * as React from "react";

export function Logo(props: { className: string | undefined; }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512" className={props.className}>
            <defs>
                <clipPath id="Logo_svg__a">
                    <path d="M0 0h512v512H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#Logo_svg__a)">
                <g fill="#bdbdbd" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M387.9 489H124a22 22 0 01-21-15.4L21.4 214.8a22 22 0 017.8-24.3L242.8 31a21.8 21.8 0 0126.4 0l213.6 159.6a22 22 0 017.8 24.3L409 473.6a22 22 0 01-21 15.4z" />
                    <path
                        fill="#424242"
                        d="M256 34.5c-3 0-5.9 1-8.4 2.8L34 196.9a14 14 0 00-5 15.5l81.8 258.8A14 14 0 00124 481h264a14 14 0 0013.3-9.8L483 212.4a14 14 0 00-5-15.5L264.4 37.3a14 14 0 00-8.4-2.8m0-16c6.5 0 12.7 2 18 6L487.6 184a30 30 0 0110.7 33l-81.8 259c-4 12.5-15.5 20.9-28.6 20.9H124a29.9 29.9 0 01-28.6-21L13.7 217.2a30 30 0 0110.7-33L238 24.3c5.3-3.9 11.5-6 18-6z"
                    />
                </g>
                <text
                    fill="#424242"
                    fontFamily="FiraCode-Bold,Fira Code"
                    fontSize={238}
                    fontWeight={700}
                    transform="translate(111 373)"
                >
                    <tspan x={0} y={0}>
                        {"WN"}
                    </tspan>
                </text>
                <path fill="none" d="M0 203h512" />
            </g>
        </svg>
    )
}

import React from 'react';
import {clsx} from "clsx";

type MainCardProps = {
    title: string;
    image: string;
    imageFromAssets: boolean;
    imageBackground?: boolean;
    description: string[];
    onClick?: () => void;
    complement?: React.ReactNode;
}

export const MainCard = ({title, image, imageFromAssets, imageBackground, description, onClick, complement}: MainCardProps) => {
    return (
        <div className={clsx(
            "flex flex-col justify-between",
            "w-auto min-w-1/4",
            "m-3 md:m-5 lg:m-3 p-6 ",
            "bg-zinc-700",
            "rounded-lg"
        )}>
            <div className={clsx(
                "flex flex-col items-center gap-4",
                "w-full"
            )}>
                <img src={imageFromAssets ? require("../" + image) : image} alt={title} onClick={onClick} className={clsx(
                    "rounded-lg",
                    "object-contain",
                    "w-2/3 aspect-square",
                    imageBackground ? "bg-purple-400 opacity-80 p-4 shadow-all-around-light" : "bg-none"
                )}/>

                <h2 className={clsx(
                    "text-lg font-bold truncate max-w-full"
                )}>{title}</h2>

                <div>
                    {description.map((desc, index) => (
                        <p key={index} className={clsx(
                            "text-sm lg:text-lg text-left",
                            "my-2"
                        )}>{desc}</p>
                    ))}
                </div>
            </div>

            {complement}
        </div>
    )
}

export default MainCard;
import {clsx} from "clsx";

type MainCardProps = {
    title: string;
    image: string;
    description: string[];
    onClick?: () => void;
}

export const MainCard = ({title, image, description, onClick}: MainCardProps) => {
    return (
        <div className={clsx(
            "flex flex-col items-center gap-4",
            "w-auto min-w-1/4",
            "m-4 p-6 md:m-6",
            "bg-zinc-700",
            "rounded-lg",
        )} onClick={onClick}>
            <img src={require("../" + image)} alt={title} className={clsx(
                "rounded-lg",
                "object-contain",
                "w-2/3 aspect-square",
            )}/>

            <h2 className={clsx(
                "text-lg font-bold"
            )}>{title}</h2>

            <div>
                {description.map((desc, index) => (
                    <p key={index} className={clsx(
                        "text-sm lg:text-lg text-left"
                    )}>{desc}</p>
                ))}
            </div>
        </div>
    )
}

export default MainCard;
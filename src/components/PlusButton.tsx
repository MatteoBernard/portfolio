import {clsx} from "clsx";

type PlusButtonProps = {
    onClick: () => void;
}

export const PlusButton = ({onClick}: PlusButtonProps) => {
    return (
        <div className={clsx(
            "flex items-center justify-center",
            "w-10",
            "bg-purple-400 bg-opacity-80",
            "rounded-full",
        )}>
            <button onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className={clsx(
                    "m-3"
                )}>
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                </svg>
            </button>
        </div>
    );
}

export default PlusButton;
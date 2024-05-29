import {ReactNode} from "react";
import {clsx} from "clsx";

type MainContainerProps = {
    children: ReactNode,
    transparent: boolean
}

export const MainContainer = ({children, transparent}: MainContainerProps) => {
    return (
       <div className={clsx(
           "text-center",
           "mx-auto my-6 md:my-12 lg:my-16 p-4 lg:p-6",
           "w-9/12",
           transparent ?
               "bg-zinc-900 " :
               "bg-zinc-800 rounded-lg shadow-lg",
       )}>
           {children}
       </div>
    );
}

export default MainContainer;
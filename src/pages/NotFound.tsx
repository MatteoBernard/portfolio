import React from 'react';
import Template from "./Template";
import {clsx} from "clsx";
import {useTranslation} from "react-i18next";

export const NotFound = () => {

    const { t } = useTranslation();
    const memeImagesContext = require.context('../assets/images/memes', false, /\.(png|jpe?g|svg|gif)$/);
    const memeImages = memeImagesContext.keys();
    const randomImageKey = memeImages[Math.floor(Math.random() * memeImages.length)];
    const randomImage = memeImagesContext(randomImageKey);

    return (
        <Template title={"Not Found"}>
            <div className={clsx(
                "flex justify-center items-center flex-col gap-6",
                "p-12",
            )}>
                <h1 className={clsx(
                    "text-4xl font-bold text-center"
                )}>{t("global:404")}</h1>
                <img src={randomImage} alt={"404"} className={"w-80"}/>
            </div>
        </Template>
    );
}

export default NotFound;
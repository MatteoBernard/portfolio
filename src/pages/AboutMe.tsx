import Template from "./Template";
import {MainContainer} from "../components";
import {clsx} from "clsx";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {AboutMeData} from "../types";

export const AboutMe = () => {

    const { t } = useTranslation();
    const aboutMe = i18n.getResourceBundle(i18n.language, "aboutme") as AboutMeData;

    return (
        <Template title={"AboutMe"}>
            <MainContainer transparent={false}>

                <h1 className={"section-title"}>{t('global:aboutMe')}</h1>

                <div className={clsx(
                    "flex flex-col justify-around text-left gap-4",
                )}>
                    {
                        aboutMe.descriptions.long.map((item) => (
                            <p className={clsx(
                                "text-sm md:text-lg"
                            )}>{item}</p>
                        ))
                    }
                    <img src={require("../" + aboutMe.educationImg)} className={clsx(
                        "rounded-lg",
                        "max-h-96",
                        "mx-auto my-4"
                    )}/>
                </div>

                <h1 className={"section-title"}>{t('global:otherInfos')}</h1>

                <div className={clsx(
                    "flex flex-col justify-around text-left gap-4",
                )}>
                    {
                        aboutMe.otherInfos.map((item) => (
                            <p className={clsx(
                                "text-sm md:text-lg"
                            )}>{item}</p>
                        ))
                    }
                    <p className={"text-sm md:text-lg"}>{aboutMe.pfp_by} <a className={"underline"} href={"https://meridiona.carrd.co/"} target={"_blank"}>Meridiona</a> !</p>
                </div>
            </MainContainer>
        </Template>
    );
}
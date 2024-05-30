import Template from "./Template";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Skill} from "../types";
import {MainCard, MainContainer} from "../components";
import {clsx} from "clsx";

export const Skills = () => {

    const { t } = useTranslation();
    const skills = i18n.getResourceBundle(i18n.language, "skills") as Skill[];

    return (
        <Template title={"Skills"}>
            <MainContainer transparent={false}>

                <h1 className={"section-title"}>{t("global:mySkills")}</h1>

                <div className={clsx(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"
                )}>
                    {
                        skills.map((skill) => (
                            <MainCard title={skill.name} image={skill.image} imageFromAssets={false}
                                      description={skill.description}/>
                        ))
                    }
                </div>
            </MainContainer>

        </Template>
    );
}
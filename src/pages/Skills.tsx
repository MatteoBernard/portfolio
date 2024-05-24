import Template from "./Template";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Skill} from "../types";

export const Skills = () => {

    const { t } = useTranslation();
    const skills = i18n.getResourceBundle(i18n.language, "skills") as Skill[];

    return (
        <Template title={"Skills"}>
            <h1>Skills</h1>

            <div>
                {skills.map((skill, index) => (
                    <p key={index}>
                        {skill.name}
                    </p>
                ))}
            </div>
        </Template>
    );
}
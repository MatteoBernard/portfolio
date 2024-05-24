import Template from "./Template";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Project} from "../types";
import {Link} from "react-router-dom";

export const Projects = () => {

    const { t } = useTranslation();
    const projects = i18n.getResourceBundle(i18n.language, "projects") as Project[];

    return (
        <Template title={"Project"}>
            <h1>Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <Link to={"/project/" + project.name} key={index}>
                        <p>{project.name}</p>
                    </Link>
                ))}
            </div>
        </Template>
    );
}
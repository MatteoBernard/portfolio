import Template from "./Template";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Project} from "../types";
import {GithubButton, MainCard, MainContainer, PlusButton} from "../components";
import {clsx} from "clsx";
import {useNavigate} from "react-router-dom";

export const Projects = () => {

    const { t } = useTranslation();
    const projects = i18n.getResourceBundle(i18n.language, "projects") as Project[];
    const navigate = useNavigate();

    return (
        <Template title={"Project"}>

            <MainContainer transparent={false}>
                <h1 className={"section-title"}>{t("global:myProjects")}</h1>
                <div className={clsx(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"
                )}>
                    {projects.map((project, index) => (
                        <MainCard title={project.name} image={project.image} imageFromAssets={true} description={[project.description.short]}
                            complement={
                                <div className={clsx(
                                    "flex justify-center items-center gap-6 bottom-0"
                                )}>
                                    {
                                        project.github &&
                                        <GithubButton link={project.github} />
                                    }
                                    <PlusButton onClick={() => {navigate("/projects/" + project.name)}} />
                                </div>
                            }
                        />
                    ))}
                </div>
            </MainContainer>

        </Template>
    );
}
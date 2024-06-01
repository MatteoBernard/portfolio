import Template from "./Template";
import {useNavigate, useParams} from "react-router-dom";
import i18n from "i18next";
import {Project} from "../types";
import {GithubButton, LinkedinButton, MainContainer} from "../components";
import {clsx} from "clsx";
import {useTranslation} from "react-i18next";

export const ShowProject = () => {

    const navigate = useNavigate();
    const { projectName } = useParams();
    const projects = i18n.getResourceBundle(i18n.language, 'projects') as Project[];
    const project = projects.find(p => p.name === projectName);
    const { t } = useTranslation();

    if (projectName === undefined || project === undefined) {
        navigate('/404');
    }

    return (
        <Template title={"ShowProject"}>
            <MainContainer transparent={true}>
                <div className={clsx(
                    "flex flex-col justify-around items-center gap-4",
                    "md:flex-row",
                )}>

                    <div className={clsx(
                        "flex items-center justify-center",
                        "w-3/5 md:w-1/3 lg:w-1/4",
                        "object-contain",
                        "aspect-square"
                    )}>
                        <img src={require("../" + project?.image)} alt={project?.name} className={clsx(
                            "rounded-lg",
                            "w-full",
                        )}/>
                    </div>

                    <div className={clsx(
                        "flex flex-col gap-6",
                        "md:w-1/2",
                        "md:ml-12",
                    )}>
                        <div className={clsx(
                            "flex items-center justify-center gap-4",
                        )}>
                            <h1 className={clsx(
                                "text-3xl md:text-4xl lg:text-6xl",
                                "font-bold text-purple-400",
                            )}>{project?.name}</h1>

                            {project?.github &&
                                <GithubButton link={project?.github}/>
                            }
                        </div>

                        <h2 className={clsx(
                            "text-lg md:text-xl",
                            "font-bold",
                        )}>{project?.date}, {project?.duration}</h2>

                        <p className={clsx(
                            "text-lg",
                        )}>{project?.description.short}</p>
                    </div>
                </div>
            </MainContainer>

            <MainContainer transparent={false}>
                <h1 className={"section-title"}>{i18n.t('global:project')}</h1>

                <div>
                    {project?.description.long.map((desc, index) => (
                        <p key={index} className={clsx(
                            "md:text-lg text-left",
                            "my-6"
                        )}>{desc}</p>
                    ))}
                </div>

                <h1 className={"section-title"}>{i18n.t('global:projectImages')}</h1>

                <div className={clsx(
                    "flex flex-wrap flex-row justify-center gap-10",
                    "my-6"
                )}>
                    {project?.images.map((image, index) => (
                        <img key={index} src={require("../" + image)} alt={project?.name} className={clsx(
                            "rounded-lg",
                            "max-h-96",
                        )}/>
                    ))}
                </div>

                {project?.collaborators && project?.collaborators.length > 0 &&
                    <>
                        <h1 className={"section-title"}>{i18n.t('global:collaborators')}</h1>

                        <div className={clsx(
                            "flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4",
                        )}>
                            {project.collaborators.map((collaborator, index) => (
                                <div className={clsx(
                                    "flex items-center justify-center gap-2",
                                    "md:w-1/4",
                                    "m-2 md:m-4"
                                )}>
                                    <p className={clsx(
                                        "md:text-lg",
                                        "m-2"
                                    )} key={index}>
                                        {collaborator.name}
                                    </p>
                                    <LinkedinButton link={collaborator.linkedin}/>
                                </div>


                            ))}
                        </div>
                    </>
                }

            </MainContainer>

        </Template>
    );
}
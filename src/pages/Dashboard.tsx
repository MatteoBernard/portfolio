import {AboutMeData, GlobalSkill, Project} from "../types";
import i18n from "i18next";
import Template from "./Template";
import {useTranslation} from "react-i18next";
import {MainCard, MainContainer} from "../components";
import pfp from "../assets/images/aboutme/pfp.png"
import pfp2 from "../assets/images/aboutme/pfp2.png"
import {clsx} from "clsx";
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {

    const { t } = useTranslation();
    const aboutMe = i18n.getResourceBundle(i18n.language, "aboutme") as AboutMeData;
    const projects = i18n.getResourceBundle(i18n.language, "projects").slice(0, 4) as Project[];
    const globalskills = i18n.getResourceBundle(i18n.language, "globalskills") as GlobalSkill[];
    const navigate = useNavigate();

    return (
        <Template title={"Dashboard"}>
            <MainContainer transparent={true}>
                <div className={clsx(
                    "flex flex-col-reverse justify-around items-center gap-2",
                    "md:flex-row lg:my-4",
                )}>
                    <div className={clsx(
                        "flex flex-col justify-center gap-6",
                        "md:w-2/4 ",
                        "text-left"
                    )}>
                        <h1 className={clsx(
                            "text-3xl md:text-6xl",
                            "font-bold",
                        )}>{t('global:hi')} <span className={"text-purple-400"}>{t('global:firstName')}</span></h1>
                        <h2 className={clsx(
                            "text-lg md:text-xl",
                            "font-bold",
                        )}>{aboutMe.job}</h2>

                        <div>
                            {aboutMe.descriptions.short.map((item) => (
                                <div>
                                    <p className={clsx(
                                        "text-sm md:text-lg"
                                    )}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className={clsx(
                            "flex flex-row gap-4 m-auto md:m-0",
                        )}>
                            <a href={aboutMe.contact.linkedin} target={"_blank"} className={"contact-img-wrapper"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className={"contact-img"}>
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href={aboutMe.contact.github} target={"_blank"} className={"contact-img-wrapper"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className={"contact-img"}>
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href={"mailto:" + aboutMe.contact.email} target={"_blank"}
                               className={"contact-img-wrapper"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className={"contact-img"}>
                                    <path
                                        d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={clsx(
                        "h-3/5 w-3/5 md:h-60 md:w-60 lg:h-80 lg:w-80",
                        "mb-12"
                    )}>
                        <img src={pfp2} className={clsx(
                            "rounded-full",
                            "shadow-all-around",
                            "bg-purple-400 opacity-80",
                        )}/>
                    </div>
                </div>
            </MainContainer>

            <MainContainer transparent={false}>
                <h1 className={"section-title"}>{t("global:mySkills")}</h1>

                <div className={clsx(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"
                )}>
                    {
                        globalskills.map((skill) => (
                            <MainCard title={skill.name} image={skill.image} imageFromAssets={true} imageBackground={true}
                                      description={skill.description} truncateText={false}/>
                        ))
                    }
                </div>

                <button onClick={() => {navigate("/skills")}}>
                    <p className={"section-subtitle"}>{t("global:seeMore")}</p>
                </button>
            </MainContainer>

            <MainContainer transparent={false}>
                <h1 className={"section-title"}>{t("global:myProjects")}</h1>

                <div className={clsx(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"
                )}>
                    {
                        projects.map((project) => (
                            <MainCard title={project.name} image={project.image} imageFromAssets={true}
                                      description={[project.description.short]} onClick={() => {navigate("/projects/" + project.name)}}/>
                        ))
                    }
                </div>

                <button onClick={() => {navigate("/projects")}}>
                    <p className={"section-subtitle"}>{t("global:seeMore")}</p>
                </button>
            </MainContainer>

        </Template>
    );
}
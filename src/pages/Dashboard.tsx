import {AboutMe} from "../types";
import i18n from "i18next";
import Template from "./Template";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export const Dashboard = () => {

    const { t } = useTranslation();
    const aboutMe = i18n.getResourceBundle(i18n.language, "aboutme") as AboutMe;

    return (
        <Template title={"Dashboard"}>
            <h1>Dashboard</h1>
            <div>
                <p>{aboutMe.job}</p>
                <p>{aboutMe.name}</p>
            </div>
            <Link to={"/skills"}>
                Skills
            </Link>
            <Link to={"/projects"}>
                Projects
            </Link>

        </Template>
    );
}
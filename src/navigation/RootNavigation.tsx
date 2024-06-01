import {Route, Routes} from "react-router-dom";
import {AboutMe, Dashboard, NotFound, Projects, ShowProject, Skills} from "../pages";

export const RootNavigation = () => {
    return (
        <Routes>
            <Route path={"/aboutme"} element={<AboutMe />} />
            <Route path={"/skills"} element={<Skills />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/projects/:projectName"} element={<ShowProject />} />
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"*"} element={<NotFound />} />
        </Routes>
    );
}
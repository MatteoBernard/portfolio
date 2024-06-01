import {Route, Routes, useLocation} from "react-router-dom";
import {AboutMe, Dashboard, NotFound, Projects, ShowProject, Skills} from "../pages";
import {useEffect} from "react";

export const RootNavigation = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
import {Route, Routes} from "react-router-dom";
import {Dashboard, Projects, ShowProject, Skills} from "../pages";

export const Router = () => {
    return (
        <Routes>
            <Route path={"/skills"} element={<Skills />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/project/:projectName"} element={<ShowProject />} />
            <Route path={"/"} element={<Dashboard />} />
        </Routes>
    );
}
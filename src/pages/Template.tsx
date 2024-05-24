import {ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

type TemplateProps = {
    children: ReactNode;
    title: string;
}

export const Template = ({children, title}: TemplateProps) => {

    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div>
                <Link to={"/"}>Dashboard</Link>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('fr')}>Français</button>
            </div>
            {children}
        </div>
    );
}

export default Template;
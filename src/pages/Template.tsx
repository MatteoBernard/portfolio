import {ReactNode, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import ukFlag from "../assets/images/icons/uk.jpg";
import frFlag from "../assets/images/icons/fr.jpg";
import {clsx} from "clsx";

type TemplateProps = {
    children: ReactNode;
    title: string;
}

export const Template = ({children, title}: TemplateProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { i18n, t } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <header className={clsx(
                "flex justify-around items-center",
                "p-6 h-16",
                "bg-zinc-950",
                "font-semibold"
            )}>
                <p className={clsx(
                    "text-xl",
                )}>{t('global:lastName')} {t('global:firstName')}</p>

                <div className={clsx(
                    "flex justify-around gap-2 items-center",
                    "w-1/3 ",
                    "sm:hidden",
                )}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {
                            isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            )
                        }
                    </button>
                </div>

                {isMenuOpen && (
                    <div className={clsx(
                        "absolute z-10 right-0 top-16",
                        "w-1/2 h-auto",
                        "flex flex-col items-center justify-center",
                        "p-6 space-y-4",
                        "bg-zinc-950 rounded-bl-md",
                        "sm:block",
                    )}>
                        <Link to={"/"} className={"header-link"}>{t('global:home')}</Link>
                        <Link to={"/skills"} className={"header-link"}>{t('global:skills')}</Link>
                        <Link to={"/projects"} className={"header-link"}>{t('global:projects')}</Link>

                        { i18n.language === 'en' ?
                            <button onClick={() => changeLanguage('fr')}>
                                <img src={frFlag} className={"header-flag"}/>
                            </button> :
                            <button onClick={() => changeLanguage('en')}>
                                <img src={ukFlag} className={"header-flag"}/>
                            </button>
                        }
                    </div>
                )}

                {!isMenuOpen && (
                    <div className={clsx(
                        "hidden sm:flex justify-around gap-2 items-center",
                        "w-1/3",
                    )}>
                        <Link to={"/"} className={"header-link"}>{t('global:home')}</Link>
                        <Link to={"/skills"} className={"header-link"}>{t('global:skills')}</Link>
                        <Link to={"/projects"} className={"header-link"}>{t('global:projects')}</Link>

                        {i18n.language === 'en' ?
                            <button onClick={() => changeLanguage('fr')}>
                                <img src={frFlag} className={"header-flag"}/>
                            </button> :
                            <button onClick={() => changeLanguage('en')}>
                                <img src={ukFlag} className={"header-flag"}/>
                            </button>
                        }
                    </div>
                )}

            </header>
            {children}
            <footer className={clsx(
                "flex justify-center items-center flex-col gap-2",
                "p-6",
                "text-center text-sm md:text-lg",
                "bg-zinc-950",
                "bottom-0"
            )}>
                <p>{t('global:footer.top')}</p>
                <p>{t('global:footer.bottom')}</p>
            </footer>
        </div>
    );
}

export default Template;
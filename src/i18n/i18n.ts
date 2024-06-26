import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import aboutme_en from "./en/aboutme.json";
import aboutme_fr from "./fr/aboutme.json";
import skills_en from "./en/skills.json";
import skills_fr from "./fr/skills.json";
import projects_en from "./en/projects.json";
import projects_fr from "./fr/projects.json";
import global_en from "./en/global.json";
import global_fr from "./fr/global.json";
import globalskills_en from "./en/globalskills.json";
import globalskills_fr from "./fr/globalskills.json";

const browserLanguage = navigator.language.slice(0, 2);

i18n
    .use(initReactI18next)
    .init({
        interpolation: { escapeValue: false },
        lng: browserLanguage,
        fallbackLng: 'en',
        resources: {
            en: {
                global: global_en,
                aboutme: aboutme_en,
                skills: skills_en,
                projects: projects_en,
                globalskills: globalskills_en,
            },
            fr: {
                global: global_fr,
                aboutme: aboutme_fr,
                skills: skills_fr,
                projects: projects_fr,
                globalskills: globalskills_fr,
            },
        },
    });

export default i18n;

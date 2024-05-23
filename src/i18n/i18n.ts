import i18next from "i18next";
import aboutme_en from "./en/aboutme.json";
import aboutme_fr from "./fr/aboutme.json";
import skills_en from "./en/skills.json";
import skills_fr from "./fr/skills.json";
import projects_en from "./en/projects.json";
import projects_fr from "./fr/projects.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        en: {
            aboutme: aboutme_en,
            skills: skills_en,
            projects: projects_en
        },
        fr: {
            aboutme: aboutme_fr,
            skills: skills_fr,
            projects: projects_fr
        }
    },
});

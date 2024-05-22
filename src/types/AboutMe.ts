export interface AboutMe {
    name: string;
    job: string;
    image: string;
    descriptions: {
        short: string;
        long: string;
    }
    educationImg: string;
    otherInfos: string;
    contact: {
        linkedin: string;
        github: string;
        email: string;
    }
    links: {
        name: string;
        link: string;
    }[]
}
export interface AboutMeData {
    job: string;
    image: string;
    descriptions: {
        short: string[];
        long: string[];
    }
    educationImg: string;
    otherInfos: string[];
    contact: {
        linkedin: string;
        github: string;
        email: string;
    },
    pfp_by: string;
}
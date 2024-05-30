export interface Project {
    name: string;
    image: string;
    description: {
        short: string;
        long: string[];
    }
    date: string;
    duration: string;
    images: string[];
    collaborators: {
        name: string;
        linkedin: string;
    }[];
    github: string;
}
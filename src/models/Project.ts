export type ProjectCategory = "Website" | "Console Application" | "Minecraft Server Plugin" | "Java Library" | "Java Program" | "Chrome Extension" | string;

export type ProjectStatus = "Active" | "Inactive" | "Abandoned";

export type ProjectTechnology = "typescript" | "javascript" | "html" | "css" | "react" | "nextjs" | "react-native" | "mysql" | "nodejs" | "nginx" | "redis" | "maven" | "websocket" | "gradle" | "mongo" | "docusaurus" | "mapbox" | "expressjs" | "chartjs" | "chatgpt" | "java" | "chakra-ui" | "mailtrap" | "bootstrap";

export type ProjectType = "Client Work" | "Personal Project";

export interface ProjectLink {
    text: string;
    icon: any;
    href: string;
}

export interface Project {
    name: string;
    summary: string;
    category: ProjectCategory;
    openSource?: boolean;
    status: ProjectStatus;
    created?: string;
    technologies: ProjectTechnology[];
    links?: ProjectLink[];
    icon?: string;
    type?: ProjectType;
    live?: boolean;
}
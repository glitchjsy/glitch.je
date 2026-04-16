import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "CloudForms",
    category: "Java Library",
    status: "Abandoned",
    summary: "A callback-based form library for Cloudburst and Nukkit, two Minecraft server softwares.",
    created: "January 2021",
    openSource: true,
    technologies: [
        "java",
        "maven"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/lukeeey/cloudforms" }
    ]
} as Project;
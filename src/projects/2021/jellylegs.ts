import { FiDownload, FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "JellyLegs",
    category: "Minecraft Server Plugin",
    status: "Abandoned",
    summary: "A very simple plugin for Nukkit server software to bypass fall damage.",
    created: "March 2021",
    openSource: true,
    technologies: [
        "java",
        "maven"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/lukeeey/JellyLegs" },
        { text: "Download on CloudburstMC", icon: FiDownload, href: "https://cloudburstmc.org/resources/jellylegs.663" }
    ]
} as Project;
import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Benchkit",
    category: "Minecraft Server Plugin",
    status: "Inactive",
    summary: "A Blockbench & Minecraft server plugin to assist with testing skins and models.",
    created: "January 2021",
    openSource: true,
    technologies: [
        "java",
        "typescript",
        "html",
        "css",
        "websocket",
        "maven"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/opencollab-incubator/benchkit" }
    ]
} as Project;